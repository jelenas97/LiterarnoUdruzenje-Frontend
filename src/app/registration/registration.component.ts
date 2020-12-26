import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private userService: UsersService, private repositoryService: RepositoryService) {

    const x = repositoryService.startProcess();

    x.subscribe(
      res => {
        this.formFieldsDto = res;
        this.formFields = res.formFields;
        this.processInstance = res.processInstanceId;
        this.formFields.forEach( (field) => {

          if ( field.type.name === 'enum'){
            // @ts-ignore
            this.enumValues = Object.keys(field.type.values);
          }
        });
      },
      err => {
      }
    );
  }

  ngOnInit() {

  }

  onSubmit(value, form){
    const o = new Array();

    for (const property in value) {
      o.push({fieldId : property, fieldValue : value[property]});
    }
    // @ts-ignore
    const x = this.userService.registerUser(o, this.formFieldsDto.taskId);

    x.subscribe(
      res => {
        alert('You registered successfully!');
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
