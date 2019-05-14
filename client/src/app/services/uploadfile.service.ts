import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {Injectable} from "@angular/core";
import {SessionVM} from "../view-model/session/session-vm";
import {AuthenticateService} from "./authenticate.service";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {ManagedUpload} from "../../../node_modules/aws-sdk/lib/s3/managed_upload";

@Injectable()
export class UploadFileService {
  private session: SessionVM;

  constructor(private authService: AuthenticateService,) {
    this.authService.session$.subscribe(data => {
      this.session = data;
    });
  }
  getuploadFile(file): Observable<string> {
    console.log(file);
    const contentType = file.type;

    const params = {
      Key: file.name,
      Bucket: 'babyandmom',
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    return of(this.uploadFile(params));

  };
  uploadFile(params){
    const bucket = new S3(
      {
        accessKeyId: 'AKIA5PD4FRXIV4AAONM7',
        secretAccessKey: '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',
        region: 'us-west-2'
      }
    );
    return bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return err;
      }
      console.log('Successfully uploaded file.', data['Location']);
      return data['Location'];
    });
  }

}

