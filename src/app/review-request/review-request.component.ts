import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css'],
})
export class ReviewRequestComponent implements OnInit {
  files: any;

  constructor() { }

  ngOnInit(): void {
  }

  download(name: any) {

  }
}
