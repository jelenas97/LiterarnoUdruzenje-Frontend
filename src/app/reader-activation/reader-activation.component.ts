import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-reader-activation',
  templateUrl: './reader-activation.component.html',
  styleUrls: ['./reader-activation.component.css']
})
export class ReaderActivationComponent implements OnInit {

  private processId: any;
  private notifier: NotifierService;

  constructor(private userService: UsersService, private route: ActivatedRoute, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.processId = params.get('id');
        const x = this.userService.activateUser(this.processId);
        x.subscribe(
          res => {
            this.showNotification("success","Activation is done successfully");
          });
      },
      err => {
        this.showNotification("error", "Activation failed");
      }
    );
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
