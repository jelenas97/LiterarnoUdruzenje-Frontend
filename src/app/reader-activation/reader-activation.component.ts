import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reader-activation',
  templateUrl: './reader-activation.component.html',
  styleUrls: ['./reader-activation.component.css']
})
export class ReaderActivationComponent implements OnInit {

  private processId: any;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.processId = params.get('id');
        const x = this.userService.activateUser(this.processId);
        x.subscribe(
          res => {
            alert('Activation succeded');
          });
      },
      err => {
        alert('Activation failed');
      }
    );

  }
}
