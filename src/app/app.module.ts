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
import { PlagiarismDecisionComponent } from './plagiarism-decision/plagiarism-decision.component';
import { PlagiarismDetectionComponent } from './plagiarism-detection/plagiarism-detection.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { DownloadAndDecideComponent } from './download-and-decide/download-and-decide.component';
import { AskBetaReadersComponent } from './ask-beta-readers/ask-beta-readers.component';
import { ChooseBetaReadersComponent } from './choose-beta-readers/choose-beta-readers.component';
import { LeaveCommentsComponent } from './leave-comments/leave-comments.component';
import { ChangeBookCommentsComponent } from './change-book-comments/change-book-comments.component';
import { CommentsUploadComponent } from './change-book-comments/comments-upload/comments-upload.component';
import { LectorBooksComponent } from './lector-books/lector-books.component';
import { LectorsCorrectionListComponent } from './lectors-correction-list/lectors-correction-list.component';
import { LectorBasedBookUpdateComponent } from './lector-based-book-update/lector-based-book-update.component';
import { PrintDecisionListComponent } from './print-decision-list/print-decision-list.component';
import { FinalCorrectionsComponent } from './final-corrections/final-corrections.component';
import { FinalCorrectionComponent } from './final-correction/final-correction.component';


const Routes = [
  {
    path: 'registrate/:id',
    component: FormComponent,
  },
  {
    path: 'pay/:id',
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
    path:'plagiarismDetection',
    component: PlagiarismDetectionComponent,
  },
  {
    path:'plagiarismDecision/:id',
    component: PlagiarismDecisionComponent,
  },{
    path:'downloadAndDecide/:id',
    component: DownloadAndDecideComponent,
  },{
    path:'downloadList',
    component: DownloadListComponent,
  },{
    path:'askBetaReaders',
    component:AskBetaReadersComponent,
  },{
    path:'chooseBetaReaders',
    component:ChooseBetaReadersComponent,
  },{
    path:'leaveComments',
    component:LeaveCommentsComponent,
  },{
    path:'changeBookComments',
    component:ChangeBookCommentsComponent,
  },{
    path:'uploadByComments/:id',
    component: CommentsUploadComponent,
  },{
    path:'lectorBooks',
    component:  LectorBooksComponent,
  },{
    path:'lectorCorrections',
    component:  LectorsCorrectionListComponent,
  },{
    path:'lectorCorrections/:id',
    component: LectorBasedBookUpdateComponent,
  },{
    path:'printList',
    component: PrintDecisionListComponent,
  },{
    path:'finalCorrections',
    component: FinalCorrectionsComponent,
  },{
    path:'finalCorrections/:id',
    component: FinalCorrectionComponent,
  }

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
    PlagiarismDetectionComponent,
    PlagiarismDecisionComponent,
    DownloadListComponent,
    DownloadAndDecideComponent,
    AskBetaReadersComponent,
    ChooseBetaReadersComponent,
    LeaveCommentsComponent,
    ChangeBookCommentsComponent,
    CommentsUploadComponent,
    LectorBooksComponent,
    LectorsCorrectionListComponent,
    LectorBasedBookUpdateComponent,
    PrintDecisionListComponent,
    FinalCorrectionsComponent,
    FinalCorrectionComponent
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
