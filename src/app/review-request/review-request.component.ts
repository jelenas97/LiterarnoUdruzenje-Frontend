import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users/users.service';
import {ActivatedRoute, Route} from '@angular/router';
import {RepositoryService} from '../services/repository/repository.service';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css'],
})
export class ReviewRequestComponent implements OnInit {
  files: any;
  private taskId: string;

  constructor(private userService: UsersService, private route: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('id');
      const x = this.repositoryService.getFileNames(this.taskId);
      x.subscribe(
        res => {
          console.log(res);
          this.files = res;
        },
        err => {
          console.log('Error occured');
        }
      );

    });
  }

  download(name: any) {
    const x = this.userService.download(name, this.taskId);

    x.subscribe(
      res => {
        console.log(res);
        const url = window.URL.createObjectURL(res);
        window.open(url);
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
