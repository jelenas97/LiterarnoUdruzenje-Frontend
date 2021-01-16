import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../material-module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import { WriterActivationComponent } from './writer-activation/writer-activation.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { ReviewRequestComponent } from './review-request/review-request.component';


const Routes = [
  {
    path: 'registrate/:id',
    component: RegistrationComponent,
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
    RegistrationComponent,
    LoginComponent,
    HomepageComponent,
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
        ReactiveFormsModule
    ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
