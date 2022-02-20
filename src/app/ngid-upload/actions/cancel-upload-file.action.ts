import { NgidUpload } from '../domain/ngid-upload';
export const cancelUploadFileAction = (
  state: NgidUpload,
  payload: { index: number }
): void => {
  console.log(state);
  console.log(payload);
};
