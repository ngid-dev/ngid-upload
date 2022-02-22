import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgidUploadModel } from './ngid-upload/model/ngid-upload.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngid-upload';
  formGroup: FormGroup;
  formBuilder: FormBuilder;

  uploadModel: NgidUploadModel;
  constructor() {
    this.formGroup = new FormGroup({});
    this.formBuilder = new FormBuilder();
    this.uploadModel = new NgidUploadModel({
      allowedExtension: 'jpg,png,jpeg',
      maxSize: 2000000,
    });
  }

  ngOnInit(): void {
    this.buildFormGroup();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      file: ['https://picsum.photos/1920/1080'],
    });
  }
}
