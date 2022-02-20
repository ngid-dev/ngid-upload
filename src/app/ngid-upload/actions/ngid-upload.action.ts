import { IAction } from '../interface/action';

export const ADD_FILE = `[ Ngid Upload ]: Add File`;
export const DELETE_FILE = `[ Ngid Upload ]: Delete File`;
export const CHANGE_FILE = `[ Ngid Upload ]: Change File`;
export const RE_UPLOAD_FILE = `[ Ngid Upload ]: Re-Upload File`;
export const CANCEL_UPLOAD_FILE = `[ Ngid Upload ]: Cancel Upload File`;
export const UPLOAD_FILE = `[ Ngid Upload ]: Upload File`;

export class AddFile implements IAction<{ files: FileList }> {
  public readonly type = ADD_FILE;
  constructor(public payload: { files: FileList }) {}
}

export class DeleteFile implements IAction<{ index: number }> {
  public readonly type = DELETE_FILE;
  constructor(public payload: { index: number }) {}
}

export class ChangeFile implements IAction<{ index: number; file: File }> {
  public readonly type = CHANGE_FILE;
  constructor(public payload: { index: number; file: File }) {}
}

export class ReUploadFile implements IAction<{ index: number }> {
  public readonly type = RE_UPLOAD_FILE;
  constructor(public payload: { index: number }) {}
}

export class CancelUploadFile implements IAction<{ index: number }> {
  public readonly type = CANCEL_UPLOAD_FILE;
  constructor(public payload: { index: number }) {}
}

export class UploadFile implements IAction<void> {
  public readonly type = UPLOAD_FILE;
}

export type AllNgidUploadAction =
  | AddFile
  | DeleteFile
  | ChangeFile
  | ReUploadFile
  | CancelUploadFile
  | UploadFile;
