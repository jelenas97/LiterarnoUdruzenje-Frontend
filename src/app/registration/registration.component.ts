import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  categories = [];
  formFieldsDto = null;
  formFields: any;
  processInstance = '';
  enumValues = [];
  tasks: any;
  errorMessage = '';
  fieldProperties = [];
  processId: any;
  selectedFiles: FileList | undefined;

  constructor(private userService: UsersService, private repositoryService: RepositoryService, private route: ActivatedRoute) {

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

            if (field.type.name === 'multiSelect') {
              // @ts-ignore
              this.enumValues = Object.keys(field.type.values);
            }
          });
        },
        err => {
        }
      );

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
      console.log(property);
      console.log(value[property]);

      if (value[property] instanceof Array) {
        o.push({fieldId: property, fieldValues: value[property]});
      } else {
        o.push({fieldId: property, fieldValue: value[property]});
      }
    }
    if (this.selectedFiles?.length !== 0 && this.selectedFiles !== undefined) {
      // @ts-ignore
      const x = this.userService.upload(this.selectedFiles[0], this.formFieldsDto.taskId);
      x.subscribe(
        res => {
          alert('Your form is submitted succesfully!');
          return;
        },
        err => {
          this.errorMessage = err.error;
          console.log(err);
          alert(this.errorMessage);
          return;
        }
      );
    }
    if (o.length !== 0) {
      // @ts-ignore
      const x = this.userService.registerUser(o, this.formFieldsDto.taskId);

      x.subscribe(
        res => {
          alert('Your form is submitted succesfully!');
        },
        err => {
          this.errorMessage = err.error;
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
