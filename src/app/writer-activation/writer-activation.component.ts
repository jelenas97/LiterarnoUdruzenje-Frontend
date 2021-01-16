import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-writer-activation',
  templateUrl: './writer-activation.component.html',
  styleUrls: ['./writer-activation.component.css']
})
export class WriterActivationComponent implements OnInit {
  private processId: any;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      const x = this.userService.activateUser(this.processId);
      x.subscribe(
        res => {
          alert('Activation succeded');
          this.router.navigate(['/registrate/' + this.processId]);
        });
        },
        err => {
          alert('Activation failed');
        }
      );

    }

}
