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

  public static create(state: NgidUpload, file: File): NgidUploadFile {
    const ngidUploadFile = new NgidUploadFile(state, file);
    return ngidUploadFile;
  }
}
