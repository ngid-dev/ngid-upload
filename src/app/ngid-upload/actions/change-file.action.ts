import { NgidUpload } from '../domain/ngid-upload';
import { NgidUploadFile } from '../domain/ngid-upload-file';
export const changeFileAction = (
  state: NgidUpload,
  payload: { index: number; file: File }
): void => {
  const ngidUploadFile = NgidUploadFile.create(state, payload.file);
  state.files[payload.index] = ngidUploadFile;
};
