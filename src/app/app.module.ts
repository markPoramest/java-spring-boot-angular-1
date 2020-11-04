import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PMLListComponent } from './pml-list/pml-list.component';

import { MatButtonModule} from '@angular/material/Button';
import { MatCardModule } from '@angular/material/Card';
import {  MatInputModule } from '@angular/material/Input';
import {  MatListModule } from '@angular/material/List';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PMLListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
