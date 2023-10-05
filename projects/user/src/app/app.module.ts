import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './app.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    UserComponent,
    DetailUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgFor
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
