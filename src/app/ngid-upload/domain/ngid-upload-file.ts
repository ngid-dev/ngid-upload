import { HttpProgressEvent } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgidUploadErrorModel } from '../model/ngid-upload-error.model';
import { NgidUploadStatusType } from '../type/ngid-upload-status.typ';
import { NgidUpload } from './ngid-upload';
export class NgidUploadFile {
  status: NgidUploadStatusType;
  progress: number;
  isNew: boolean;
  isImage: boolean;
  src: string;
  error: NgidUploadErrorModel;
  subscription: Subscription;
  constructor(public parent: NgidUpload, public origin: File) {
    this.isNew = true;
  }

  public setSrc(src: string): void {
    this.src = src;
    this.progress = 100;
    this.status = 'UPLOADED';
  }

  public setStatus(status: NgidUploadStatusType): void {
    this.status = status;
  }

  public setProgress(progress: number | HttpProgressEvent): void {
    if (typeof progress === 'number') {
      this.progress = progress;
    } else {
      this.progress = Math.ceil(
        (progress.loaded / (progress.total || 1)) * 100
      );
    }
  }

  public get formData(): FormData {
    const formData = new FormData();
    formData.append('files', this.origin, this.origin.name);
    return formData;
  }

  public static create(state: NgidUpload, file: File): NgidUploadFile {
    const ngidUploadFile = new NgidUploadFile(state, file);

    ngidUploadFile.isImage = file.type.includes('image/');

    const { model } = state;

    const fileExtension = file.name.split('.').pop() as string;

    if (model) {
      const { allowedExtension, maxSize } = model;
      if (
        allowedExtension &&
        !allowedExtension.toLocaleLowerCase().includes(fileExtension)
      ) {
        ngidUploadFile.error = NgidUploadErrorModel.create(
          'INVALID',
          `Allowed extension: ${allowedExtension.toLocaleLowerCase()}`
        );
        ngidUploadFile.status = 'INVALID';

        return ngidUploadFile;
      }

      if (maxSize && maxSize < file.size) {
        ngidUploadFile.error = NgidUploadErrorModel.create(
          'INVALID',
          `Max size allowed: ${maxSize / 1000000} MB`
        );
        ngidUploadFile.status = 'INVALID';
        return ngidUploadFile;
      }
    }

    return ngidUploadFile;
  }
}
