import { AuthService } from './../services/auth.service';
import { CamundaService } from './../services/camunda/camunda.service';
import { BookService } from './../services/bookService';
import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {debounceTime, filter, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';


interface SelectElement {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  notifier: NotifierService;
  categories = [];
  formFieldsDto = null;
  formFields: any;
  processInstance = '';
  enumValues: any;
  tasks: any;
  errorMessage = '';
  fieldProperties = [];
  processId: any;
  angForm: FormGroup;
  bookForm = false;
  synopsisReview=false;
  currUser: any;

  selectElements: SelectElement[] = [];
  selectedFiles: FileList | undefined;
  private redirect = false;
  private redirectFile = false;
  private redirectBeta = false;
  private redirectChoose = false;
  private onlyFiles = false;

  constructor(private userService: UsersService, private repositoryService: RepositoryService,
             private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
             private notifierService: NotifierService) {

    this.createForm();
    this.notifier = notifierService;
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');

      const x = repositoryService.startProcess(this.processId);

      x.subscribe(
        res => {
          this.formFieldsDto = res;
          this.formFields = res.formFields;
          this.processInstance = res.processInstanceId;

          console.log(this.formFields);

          this.formFields.forEach( (field) => {

            if(field.properties.minlength !== undefined && field.properties.maxlength !== undefined) {
              this.angForm.addControl(field.id, new FormControl('',Validators.compose([Validators.required,Validators.minLength(field.properties.minlength), Validators.maxLength(field.properties.maxlength)])));
            }

            if(field.properties.minlength !== undefined) {
              this.angForm.addControl(field.id, new FormControl('',Validators.compose([Validators.required,Validators.minLength(field.properties.minlength)])));
            }

            if(field.properties.maxlength !== undefined) {
              this.angForm.addControl(field.id, new FormControl('',Validators.compose([Validators.required,Validators.maxLength(field.properties.maxlength)])));
            }

            this.angForm.addControl(field.id, new FormControl('',Validators.required));

            if (field.type.name === 'multiSelect' || field.type.name === 'enum') {
              field.selectElements = [];
              Object.keys(field.type.values).forEach(value => {
                field.selectElements.push({value: value, viewValue: field.type.values[value]});
              })
            }
          });
        },
        err => {
        }
      );

    });
  }

  createForm() {
    this.angForm = this.fb.group({
    });
  }

  ngOnInit() {
  }

  onSubmit(value, form) {
    const o = new Array();
    const p = new FormData();

    for (const property in value) {
      console.log(property);
      if (property === 'betaReader'){
        if (value[property] === true ) {
          this.redirect = true;
        }
      }
      if( property==='original_decision'){
        if(value[property]==='true'){
          this.redirectFile= true;
        }
      }
      if(property ==='decision'){
        if(value[property]==='decline'){
          this.redirect=true;
        }
      }
      if(property ==='original_approval'){
        if(value[property]==='true'){
          this.redirectBeta=true;
        }
      }
      if(property ==='wantBetaReaders'){
        if(value[property]==='true'){
          this.redirectChoose=true;
        }
      }
      if(property === 'files' || property === "changedBook" || property === "moreFiles"
        || property === "updatedBookAfterLectorsCorrection"|| property === "changeAfterSuggestion") {
        this.onlyFiles = true;
      }
      if (value[property] instanceof Array) {
        o.push({fieldId: property, fieldValues: value[property]});
      } else if (property !== 'files') {
        if (property !== 'moreFiles') {
          o.push({fieldId: property, fieldValue: value[property]});
        }
      }
    }
    if (this.selectedFiles?.length !== 0 && this.selectedFiles !== undefined) {
      // @ts-ignore
      this.userService.upload(this.selectedFiles, this.formFieldsDto.taskId).subscribe(
        res => {
          this.showNotification("success","Successfully uploaded files");
          this.router.navigate(['/']);
        },
        err => {
          this.showNotification("error",'Files not uploaded successfully, try again!');
        }
      );
    }
    if (o.length !== 0 && !this.onlyFiles) {
      // @ts-ignore
      this.userService.registerUser(o, this.formFieldsDto.taskId).subscribe(
        res => {
          this.showNotification("success", "Successfully saved data")
          if (this.redirect) {
            this.redirectTo('/registrate/' + this.processId);
          }else if (this.redirectFile) {
            this.redirectTo('/downloadList');
          }else if (this.redirectBeta) {
            this.redirectTo('/askBetaReaders');
          }else if (this.redirectChoose) {
            this.redirectTo('/chooseBetaReaders');
          } else {
            this.router.navigate(['/homepage']);
          }
        },
        err => {
          this.errorMessage = err.error.message;
          console.log(err);
          this.showNotification("error", err.error.message);
        }
      );

    }

  }

  selectFiles(event: Event) {
   // @ts-ignore
    this.selectedFiles = event.target.files;

  }

  redirectTo(uri: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
