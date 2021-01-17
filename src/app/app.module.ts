import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../material-module';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { WriterActivationComponent } from './writer-activation/writer-activation.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { ReviewRequestComponent } from './review-request/review-request.component';

const Routes = [
  {
    path: 'registrate/:id',
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WriterActivationComponent,
    RequestsListComponent,
    ReviewRequestComponent
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
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  entryComponents: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
