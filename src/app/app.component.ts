import { Component } from '@angular/core';
import {CamundaService} from './services/camunda/camunda.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProcessDto} from './dto/processDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'literarnoudruzenjefrontend';
  processDto: ProcessDto;


  constructor(private camundaService: CamundaService, private router: Router) {
      this.processDto = new ProcessDto();
  }

  startRegistrationProcess() {
    this.camundaService.startReaderRegistrationProcess().subscribe( data => {
        this.processDto = data;
        console.log(this.processDto);
        this.router.navigate(['/registrate/' + this.processDto.processId]);
    });
  }
}
