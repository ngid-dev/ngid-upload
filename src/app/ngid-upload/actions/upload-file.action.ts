import { NgidUpload } from '../domain/ngid-upload';
import { uploadHelper } from '../helper/upload.helper';
export const uploadFileAction = (state: NgidUpload): void => {
  state.files.forEach((ngidUploadFile) => {
    if (
      ngidUploadFile.status !== 'UPLOADED' &&
      ngidUploadFile.status !== 'INVALID'
    ) {
      uploadHelper(ngidUploadFile);
    }
  });
};
