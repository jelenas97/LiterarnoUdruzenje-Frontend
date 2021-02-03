import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../services/camunda/camunda.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-change-book-comments',
  templateUrl: './change-book-comments.component.html',
  styleUrls: ['./change-book-comments.component.css']
})
export class ChangeBookCommentsComponent implements OnInit {

  tasks: any;
  currUser: any;

  constructor(private camundaService: CamundaService, private router: Router, private authService: AuthService) {
    this.currUser=this.authService.getCurrUser().username;
  }

  ngOnInit(): void {
    this.tasks= [];
    const x = this.camundaService.getUserTasks(this.currUser);

    x.subscribe(
      res => {
        console.log(res);
        for (const i in res){
          if(res[i].name=='Change book the based on comments'){
            this.tasks.push(res[i]);
          }
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  changeBook(piId: any) {
    this.router.navigate(['/uploadByComments/' + piId]);

  }
}
