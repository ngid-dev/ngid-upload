import { NgidUpload } from '../domain/ngid-upload';
export const reUploadFileAction = (
  state: NgidUpload,
  payload: { index: number }
): void => {
  console.log(state);
  console.log(payload);
};
