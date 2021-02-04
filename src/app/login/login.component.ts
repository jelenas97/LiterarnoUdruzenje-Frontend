import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/model/user';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  currUser: User;
  notifier: NotifierService;

  constructor(private authService: AuthService,private appComponent: AppComponent,
    private router: Router, private notifierService: NotifierService) {
    this.user = new User();
    this.currUser = new User();
    this.notifier = notifierService;
  }

  ngOnInit(){
  }

  onClickedLogin() {
    console.log('Username:' + this.currUser.username + ' and password: ' + this.currUser.password);
      this.authService.login(this.currUser).subscribe(data2 => {
        this.currUser = this.authService.getCurrUser();
        this.appComponent.ngOnInit();
        this.router.navigate(['/homepage']);
      },
      error => {
        this.showNotification("error","Incorrect username or password")
      });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

}
