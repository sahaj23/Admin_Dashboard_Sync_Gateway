import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PouchDBService } from './pouchdb.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PouchDBService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
