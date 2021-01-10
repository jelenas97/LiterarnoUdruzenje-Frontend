import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

currUser: User;
user: User;

  constructor(private authService: AuthService,private appComponent: AppComponent,
    private router: Router) { 
    this.currUser = new User();
    this.user = new User();
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
        alert('Incorrect email or password');
      });
  }

}
