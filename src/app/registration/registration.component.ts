import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  repeated_password = '';
  categories = [];
  formFieldsDto = null;
  formFields : any;
  choosen_category = -1;
  processInstance = '';
  enumValues = [];
  tasks : any;

  constructor(private userService: UsersService, private repositoryService: RepositoryService) {

    const x = repositoryService.startProcess();

    x.subscribe(
      res => {
        console.log(res);
        // this.categories = res;
        this.formFieldsDto = res;
        this.formFields = res.formFields;
        this.processInstance = res.processInstanceId;
        this.formFields.forEach( (field) => {
          //Ovo treba srediti
          // @ts-ignore
          if ( field.type.name == 'multiSelect'){
            // @ts-ignore
            this.enumValues = Object.keys(field.type.values);
          }
        });
      },
      err => {
        console.log('Error occured');
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

      if (value[property] instanceof Array) {
        o.push({fieldId: property, fieldValues: value[property]});
      } else {
        o.push({fieldId: property, fieldValue: value[property]});
      }
    }

    console.log(o);
    // @ts-ignore
    const x = this.userService.registerUser(o, this.formFieldsDto.taskId);

    x.subscribe(
      res => {
        console.log(res);

        alert('You registered successfully!');
      },
      err => {
        console.log('Error occured');
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
