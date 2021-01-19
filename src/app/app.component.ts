import { Component, OnInit } from '@angular/core';
import {CamundaService} from './services/camunda/camunda.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProcessDto} from './dto/processDto';
import { User } from './shared/model/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'literarnoudruzenjefrontend';
  processDto: ProcessDto;
  currUser: User | undefined;
  roles: string[] | undefined;
  unauthorized: boolean;
  reader: boolean | undefined;
  betaReader: boolean | undefined;
  boardMember: boolean | undefined;
  writer: boolean | undefined;
  editor: boolean | undefined;
  // itd



  constructor(private camundaService: CamundaService, private router: Router,
    private authService: AuthService) {
      this.processDto = new ProcessDto();
      this.unauthorized=true;
  }

  ngOnInit(): void {
    this.currUser= this.authService.getCurrUser();
    if(this.currUser === null){
      this.unauthorized=true;
      this.reader= false;
      this.betaReader= false;
      this.boardMember= false;
      this.writer= false;
      this.editor=false;
      //
    }else{
      if(this.currUser.roles!= null){
        this.set();
      }
    }
    //this.router.navigate(['login']);
  }

  startReaderRegistrationProcess() {
    this.camundaService.startReaderRegistrationProcess().subscribe( data => {
        this.processDto = data;
        console.log(this.processDto);
        this.router.navigate(['/registrate/' + this.processDto.processId]);
    });
  }

  startWriterRegistrationProcess() {
    this.camundaService.startWriterRegistrationProcess().subscribe( data => {
      this.processDto = data;
      console.log(this.processDto);
      this.router.navigate(['/registrate/' + this.processDto.processId]);
    });
  }

  startBookPublishingProcess(){
    this.camundaService.startBookPublishingProcess().subscribe( data => {
      this.processDto = data;
      console.log(this.processDto);
      this.router.navigate(['/bookPublishing/' + this.processDto.processId]);
    });
  }

  set(){
    if(this.currUser?.roles.includes("WRITER")){
      this.unauthorized=false;
      this.reader=false;
      this.betaReader=false;
      this.boardMember=false;
      this.writer=true;
      this.editor=false;
    } else if (this.currUser?.roles.includes("READER")){
      this.unauthorized=false;
      this.reader=true;
      this.betaReader=false;
      this.boardMember=false;
      this.writer=false;
      this.editor=false;
    } else if (this.currUser?.roles.includes("BETAREADER")){
      this.unauthorized=false;
      this.reader=false;
      this.betaReader=true;
      this.boardMember=false;
      this.writer=false;
      this.editor=false;
    } else if (this.currUser?.roles.includes("BOARDMEMBER")){
      this.unauthorized=false;
      this.reader=false;
      this.betaReader=false;
      this.boardMember=true;
      this.writer=false;
      this.editor=false;
    } else if (this.currUser?.roles.includes("EDITOR")){
      this.unauthorized=false;
      this.reader=false;
      this.betaReader=false;
      this.boardMember=false;
      this.writer=false;
      this.editor=true;
    }

  }

  getSubmitedSynopses(){
    this.router.navigate(['/synopses']);
  }

  logout(){
    this.authService.logout();
    this.ngOnInit();
  }

  getRequests() {
    this.router.navigate(['/requests']);

  }

}

