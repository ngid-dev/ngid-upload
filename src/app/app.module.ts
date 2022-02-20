import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgidUploadModule } from './ngid-upload/ngid-upload.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgidUploadModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
