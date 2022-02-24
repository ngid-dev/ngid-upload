import { HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Service } from 'src/app/service';
import { NgidUploadFile } from '../domain/ngid-upload-file';
export const uploadHelper = (ngidUploadFile: NgidUploadFile) => {
  ngidUploadFile.setStatus('ONPROGRESS');
  const formData = ngidUploadFile.formData;
  const httpRequest: HttpRequest<any> = createRequest(formData);
  Service.httpClient.request(httpRequest).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
      case HttpEventType.DownloadProgress:
        break;
      case HttpEventType.ResponseHeader:
        break;
      case HttpEventType.Response:
        ngidUploadFile.setSrc(event.body.fileUrl);
        break;
      case HttpEventType.Sent:
        break;
      case HttpEventType.UploadProgress:
        ngidUploadFile.setProgress(event);
        break;
      case HttpEventType.User:
        break;
      default:
        break;
    }
  });
};

const createRequest = (formData: FormData): HttpRequest<any> => {
  return new HttpRequest(
    'POST',
    'http://localhost:3000/api/v1/upload',
    formData,
    {
      reportProgress: true,
      responseType: 'json',
    }
  );
};
