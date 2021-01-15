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

            if (field.type.name === 'multiSelect' || field.type.name == 'enum') {
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
      this.userService.upload(this.selectedFiles, this.formFieldsDto.taskId).subscribe(
        res => {
          alert('Files uploaded successfully!');
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
