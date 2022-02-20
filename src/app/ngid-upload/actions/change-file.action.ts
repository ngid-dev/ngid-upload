import { NgidUpload } from '../domain/ngid-upload';
export const changeFileAction = (
  state: NgidUpload,
  payload: { index: number; file: File }
): void => {
  console.log(state);
  console.log(payload);
};
