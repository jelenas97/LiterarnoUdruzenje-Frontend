import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {ActivatedRoute} from '@angular/router';
import {RepositoryService} from '../../services/repository/repository.service';

@Component({
  selector: 'app-write-note-download',
  templateUrl: './write-note-download.component.html',
  styleUrls: ['./write-note-download.component.css']
})
export class WriteNoteDownloadComponent implements OnInit {

  files: any;
  private taskId: string;

  constructor(private userService: UsersService, private route: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('id');
      const x = this.repositoryService.getFileNamesPlagiarism(this.taskId);
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
    const x = this.userService.downloadFromFilename(name, this.taskId);

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
