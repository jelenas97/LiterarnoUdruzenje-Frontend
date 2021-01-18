import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


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

  categories = [];
  formFieldsDto = null;
  formFields: any;
  processInstance = '';
  enumValues: any;
  tasks: any;
  errorMessage = '';
  fieldProperties = [];
  processId: any;
  angForm: any;
  private cc: any;

  selectElements: SelectElement[] = [];
  selectedFiles: FileList | undefined;

  constructor(private userService: UsersService, private repositoryService: RepositoryService,
             private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {

    this.createForm();

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

            if (field.type.name === 'multiSelect' || field.type.name == 'enum') {
              Object.keys(field.type.values).forEach(value => {
                this.selectElements.push({value: value, viewValue: field.type.values[value]});
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
      Username: [''],
      Password: ['']
    });
  }

  ngOnInit() {

  }

  onSubmit(value, form) {
    const o = new Array();
    const p = new FormData();
    console.log(value);
    console.log(form);
    for (const property in value) {
      if (value[property] instanceof Array) {
        o.push({fieldId: property, fieldValues: value[property]});
      } else {
        o.push({fieldId: property, fieldValue: value[property]});
      }
    }
    if (this.selectedFiles?.length !== 0 && this.selectedFiles !== undefined) {
      // @ts-ignore
      this.userService.upload(this.selectedFiles, this.formFieldsDto.taskId).subscribe(
        res => {
          alert('Files uploaded successfully!');
          this.router.navigate(['/']);
        },
        err => {

          alert('Files not uploaded successfully, try again!');
        }
      );
    }
    if (o.length !== 0) {
      // @ts-ignore
      this.userService.registerUser(o, this.formFieldsDto.taskId).subscribe(
        res => {
          alert('Your form is submitted successfully!');
          this.router.navigate(['/']);
        },
        err => {
          this.errorMessage = err.error.message;
          console.log(err);
          alert(this.errorMessage);
        }
      );
    }

  }

  selectFiles(event: Event) {
   // @ts-ignore
    this.selectedFiles = event.target.files;

  }
}