import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-writer-activation',
  templateUrl: './writer-activation.component.html',
  styleUrls: ['./writer-activation.component.css']
})
export class WriterActivationComponent implements OnInit {
  private processId: any;
  private notifier: NotifierService;
  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      const x = this.userService.activateUser(this.processId);
      x.subscribe(
        res => {
          this.showNotification("success","Successfully done activation");
          this.router.navigate(['/registrate/' + this.processId]);
        },
        err => {
          this.router.navigate(['/registrate/' + this.processId]);
        });
      }
      );

    }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }
}
