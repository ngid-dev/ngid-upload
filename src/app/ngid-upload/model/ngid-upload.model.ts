export class NgidUploadModel {
  public allowedExtension?: string | null;
  public maxSize?: number | null;
  public maxFile?: number | null;
  constructor(props: {
    allowedExtension?: string | null;
    maxSize?: number | null;
    maxFile?: number | null;
  }) {
    Object.assign(this, props);
  }
}
