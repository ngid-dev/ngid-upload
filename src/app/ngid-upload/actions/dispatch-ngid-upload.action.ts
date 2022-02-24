import { NgidUpload } from '../domain/ngid-upload';
import { addFileAction } from './add-file.action';
import { cancelUploadFileAction } from './cancel-upload-file.action';
import { changeFileAction } from './change-file.action';
import { deleteFileAction } from './delete-file.action';
import * as ngidUploadAction from './ngid-upload.action';
import { reUploadFileAction } from './re-upload-file.action';
import { uploadFileAction } from './upload-file.action';
export const dispatchNgidUpload = (
  state: NgidUpload,
  action: ngidUploadAction.AllNgidUploadAction
): void => {
  switch (action.type) {
    case ngidUploadAction.ADD_FILE:
      addFileAction(state, action.payload);
      break;
    case ngidUploadAction.DELETE_FILE:
      deleteFileAction(state, action.payload);
      break;
    case ngidUploadAction.CHANGE_FILE:
      changeFileAction(state, action.payload);
      break;
    case ngidUploadAction.RE_UPLOAD_FILE:
      reUploadFileAction(state, action.payload);
      break;
    case ngidUploadAction.CANCEL_UPLOAD_FILE:
      cancelUploadFileAction(state, action.payload);
      break;
    case ngidUploadAction.UPLOAD_FILE:
      uploadFileAction(state);
      break;
    default:
      break;
  }
};
