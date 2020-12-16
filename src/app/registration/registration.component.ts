import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';
import {FormControl} from '@angular/forms';

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

  constructor(private userService: UsersService, private repositoryService: RepositoryService) {

    const x = repositoryService.startProcess();

    x.subscribe(
      res => {
        this.formFieldsDto = res;
        this.formFields = res.formFields;
        this.processInstance = res.processInstanceId;
        this.formFields.forEach( (field) => {

          // @ts-ignore
          if ( field.type.name === 'enum'){
            // @ts-ignore
            this.enumValues = Object.keys(field.type.values);
          }
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(value, form){
    const o = new Array();
    // tslint:disable-next-line:forin
    for (const property in value) {
      console.log(property);
      console.log(value[property]);
      o.push({fieldId : property, fieldValue : value[property]});
    }
    // @ts-ignore
    const x = this.userService.registerUser(o, this.formFieldsDto.taskId);

    x.subscribe(
      res => {
        alert('You registered successfully!');
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
      }
    );
  }

  getTasks(){
    const x = this.repositoryService.getTasks(this.processInstance);

    x.subscribe(
      res => {
        console.log(res);
        this.tasks = res;
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  claim(taskId){
    const x = this.repositoryService.claimTask(taskId);

    x.subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  complete(taskId){
    const x = this.repositoryService.completeTask(taskId);

    x.subscribe(
      res => {
        console.log(res);
        this.tasks = res;
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}
