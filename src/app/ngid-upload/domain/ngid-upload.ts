import { EventEmitter } from '@angular/core';
import { NgidUploadModel } from '../model/ngid-upload.model';
import { NgidUploadStatusType } from '../type/ngid-upload-status.typ';
import { NgidUploadFile } from './ngid-upload-file';
export class NgidUpload {
  files: Array<NgidUploadFile>;
  status: NgidUploadStatusType;
  isMultiple: boolean;
  error: NgidUploadStatusType;
  statusChanges: EventEmitter<NgidUploadStatusType>;
  constructor(public model: NgidUploadModel, public stringUrl: string) {
    this.statusChanges = new EventEmitter();
    this.files = new Array();
  }
  public static create(model: NgidUploadModel, stringUrl: string): NgidUpload {
    const ngidUpload = new NgidUpload(model, stringUrl);

    ngidUpload.isMultiple =
      !!model.maxFile || !!(model.maxFile && model.maxFile > 1);

    return ngidUpload;
  }
}
