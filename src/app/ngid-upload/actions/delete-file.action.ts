import { NgidUpload } from '../domain/ngid-upload';
export const deleteFileAction = (
  state: NgidUpload,
  payload: { index: number }
): void => {
  // call backend to delete a file with fileName
  // when you get some success respond
  state.files.splice(payload.index, 1);
};
