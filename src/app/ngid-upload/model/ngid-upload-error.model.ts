import { NgidUploadStatusType } from '../type/ngid-upload-status.typ';
export class NgidUploadErrorModel {
  constructor(public type: NgidUploadStatusType, public message: string) {}
  public static create(
    type: NgidUploadStatusType,
    message: string
  ): NgidUploadErrorModel {
    return new NgidUploadErrorModel(type, message);
  }
}
