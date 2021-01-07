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
import { WriterActivationComponent } from './writer-activation/writer-activation.component';

const Routes = [
  {
    path: 'registrate/:id',
    component: RegistrationComponent,
  },
  {
    path: 'activatewriter/:id',
    component: WriterActivationComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WriterActivationComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
