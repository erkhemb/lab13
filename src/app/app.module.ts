import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { HttpModule } from "@angular/http";
import { DbService } from './db.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    myRoutes,
    HttpModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
