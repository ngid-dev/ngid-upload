import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgidUploadModule } from './ngid-upload/ngid-upload.module';
import { Service } from './service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgidUploadModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(httpClient: HttpClient) {
    Service.httpClient = httpClient;
  }
}
