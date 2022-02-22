import { max, retry, Subscription } from 'rxjs';
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
