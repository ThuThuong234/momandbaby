import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {Injectable} from "@angular/core";
import {Router, } from "@angular/router";
import {SessionVM} from "../view-model/session/session-vm";
import {AuthenticateService} from "./authenticate.service";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class UploadFileService {
  private session: SessionVM;

  constructor(private authService: AuthenticateService,) {
    this.authService.session$.subscribe(data => {
      this.session = data;
    });
  }

  uploadFile(file) {
    console.log(file);
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIA5PD4FRXIV4AAONM7',
        secretAccessKey: '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',
        region: 'us-west-2'
      }
    );
    const params = {
      Key: file.name,
      Bucket: 'babyandmom',
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return err;
      }
      console.log('Successfully uploaded file.', data);
      return data;
    });
//for upload progress
    /*bucket.upload(params).on('httpUploadProgress', function (evt) {
              console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
          }).send(function (err, data) {
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }
              console.log('Successfully uploaded file.', data);
              return true;
          });*/
  }


}

