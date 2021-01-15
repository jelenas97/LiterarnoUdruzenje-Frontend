import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository/repository.service';
import {UsersService} from '../services/users/users.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


interface SelectElement {
  value: string;
  viewValue: string;
}

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
  enumValues: any;
  tasks: any;
  errorMessage = '';
  fieldProperties = [];
  processId: any;
  angForm: any;
  private cc: any;

  selectElements: SelectElement[] = [];
   toppingList: string[];
   toppings: FormControl;

  constructor(private userService: UsersService, private repositoryService: RepositoryService, private route: ActivatedRoute, private fb: FormBuilder) {

    this.createForm();

    this.toppings = new FormControl();

    this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');

      const x = repositoryService.startProcess(this.processId);

      x.subscribe(
        res => {
          this.formFieldsDto = res;
          this.formFields = res.formFields;
          this.processInstance = res.processInstanceId;

          this.formFields.forEach( (field) => {

            if(field.properties.minlength !== undefined) {
              console.log(field.properties.minlength);
              this.angForm.addControl(field.id, new FormControl('',Validators.compose([Validators.required,Validators.minLength(field.properties.minlength)])));
            }

            if(field.properties.maxlength !== undefined) {
              console.log(field.properties.maxlength);
              this.angForm.addControl(field.id, new FormControl('',Validators.compose([Validators.required,Validators.maxLength(field.properties.maxlength)])));
            }

            this.angForm.addControl(field.id, new FormControl('',Validators.required));

            if (field.type.name === 'multiSelect') {
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

  onSubmit(value, form){
    const o = new Array();

    for (const property in value) {
      if (value[property] instanceof Array) {
        o.push({fieldId: property, fieldValues: value[property]});
      } else {
        o.push({fieldId: property, fieldValue: value[property]});
      }
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
