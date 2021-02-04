import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../../services/camunda/camunda.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-comments-upload',
  templateUrl: './comments-upload.component.html',
  styleUrls: ['./comments-upload.component.css']
})
export class CommentsUploadComponent implements OnInit {

  comments: any;
  currUser: any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute,
              private router: Router, private authService: AuthService) {
    this.currUser = this.authService.getCurrUser().username;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.comments = [];
      const x = this.camundaService.getBookComments(this.processId);
      x.subscribe(
        res => {
          console.log(res);
          this.comments = res;
        },
        err => {
          console.log('Error occured');
        }
      );
  });
  }
}
