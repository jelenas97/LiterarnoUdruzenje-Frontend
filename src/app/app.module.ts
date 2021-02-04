import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../material-module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { WriterActivationComponent } from './writer-activation/writer-activation.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { ReviewRequestComponent } from './review-request/review-request.component';
import { ReaderActivationComponent } from './reader-activation/reader-activation.component';
import { SynopsesComponent } from './synopses/synopses.component';
import { SynopsisReviewComponent } from './synopsis-review/synopsis-review.component';
import { WholeBookRequestsComponent } from './whole-book-requests/whole-book-requests.component';
import { BookSubmissionComponent } from './book-submission/book-submission.component';
import {PlagiarismComplainsComponent} from './plagiarism-complains/plagiarism-complains.component';
import {WriteNotesComponent} from './write-notes/write-notes.component';
import {PlagiarismFinalDecisionComponent} from './plagiarism-final-decision/plagiarism-final-decision.component';
import {AllPlagiarismsComponent} from './all-plagiarisms/all-plagiarisms.component';


const Routes = [
  {
    path: 'registrate/:id',
    component: FormComponent,
  },
  {
    path: 'chooseEditors/:id',
    component: FormComponent,
  },
  {
    path: 'reviewRequest/:id',
    component: ReviewRequestComponent,
  },
  {
    path: 'activatewriter/:id',
    component: WriterActivationComponent,
  },
  {
    path: 'requests',
    component: RequestsListComponent,
  },
  {
    path: 'activatereader/:id',
    component: ReaderActivationComponent,
  },
  {
    path: 'bookPublishing/:id',
    component: FormComponent,
  },
  {
    path: 'synopses',
    component: SynopsesComponent,
  },
  {
    path:'synopsisReview/:id',
    component: SynopsisReviewComponent,
  },
  {
    path:'wholeBookRequests',
    component: WholeBookRequestsComponent,
  },
  {
    path:'bookSubmission/:id',
    component: BookSubmissionComponent,
  },
  {
    path: 'plagiarism/:id',
    component: FormComponent,
  },
  {
    path: 'plagiarismComplains',
    component: PlagiarismComplainsComponent,
  },
  {
    path: 'writeNotes',
    component: WriteNotesComponent,
  },
  {
    path: 'plagiarisms',
    component: AllPlagiarismsComponent,
  },
  {
    path: 'plagiarismDecision/:id',
    component: FormComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    HomepageComponent,
    WriterActivationComponent,
    RequestsListComponent,
    ReviewRequestComponent,
    ReaderActivationComponent,
    SynopsesComponent,
    SynopsisReviewComponent,
    WholeBookRequestsComponent,
    BookSubmissionComponent,
    PlagiarismComplainsComponent,
    WriteNotesComponent,
    PlagiarismFinalDecisionComponent,
    AllPlagiarismsComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(Routes),
        HttpClientModule,
        ReactiveFormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DemoMaterialModule,
        MatInputModule
    ],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }, AuthService],
  entryComponents: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
