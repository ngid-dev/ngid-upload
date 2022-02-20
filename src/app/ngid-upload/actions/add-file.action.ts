import { NgidUpload } from '../domain/ngid-upload';
import { NgidUploadFile } from '../domain/ngid-upload-file';
export const addFileAction = (
  state: NgidUpload,
  payload: { files: FileList }
): void => {
  const ngidUploadFiles: Array<NgidUploadFile> = [];
  for (let i = 0; i < payload.files.length; i++) {
    const file: File = payload.files[i];
    const ngidUploadFile = NgidUploadFile.create(state, file);
    ngidUploadFiles.push(ngidUploadFile);
  }

  state.files = [...state.files, ...ngidUploadFiles];
};
