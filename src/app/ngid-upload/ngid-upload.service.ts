import { NgidUpload } from './domain/ngid-upload';
import { NgidUploadModel } from './model/ngid-upload.model';
import * as ngidUploadAction from './actions/ngid-upload.action';
import { dispatchNgidUpload } from './actions/dispatch-ngid-upload.action';
export class NgidUploadService {
  private state: NgidUpload;
  constructor() {}

  public setState(model: NgidUploadModel, stringUrl: string): NgidUpload {
    this.state = NgidUpload.create(model, stringUrl);
    return this.state;
  }

  public dispatch(action: ngidUploadAction.AllNgidUploadAction): void {
    dispatchNgidUpload(this.state, action);
  }
}
