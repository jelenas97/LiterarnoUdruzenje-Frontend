import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CamundaService } from '../services/camunda/camunda.service';

@Component({
  selector: 'app-lector-based-book-update',
  templateUrl: './lector-based-book-update.component.html',
  styleUrls: ['./lector-based-book-update.component.css']
})
export class LectorBasedBookUpdateComponent implements OnInit {

  corrections: any;
  currUser: any;
  private processId: any;

  constructor(private camundaService: CamundaService, private route: ActivatedRoute, private authService: AuthService) {
    this.currUser = this.authService.getCurrUser().username;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.processId = params.get('id');
      this.corrections = [];
      const x = this.camundaService.getLectorCorrections(this.processId);
      x.subscribe(
        res => {
          this.corrections = res[0].fieldValue;
        },
        err => {
          console.log('Error occured');
        }
      );
  });
  }
}
