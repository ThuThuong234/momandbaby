import {Component, OnInit} from '@angular/core';
import {SessionVM} from '../../view-model/session/session-vm';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../view-model/user/user';
import {AuthenticateService} from '../../services/authenticate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserResModel} from '../../view-model/user/user-res-model';
import {UploadFileService} from '../../services/uploadfile.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  isEdit: boolean;
  isUpfile:boolean;
  user: User = new User();
  userShow: UserResModel;
  namefull: string;
  image_user_old:string;
  imageSrc: string;

  id: string;
  // file hinh
  user_img: File = null;
  selectedFiles: FileList;
  public session: SessionVM;

  constructor(private authService: AuthenticateService, private router: Router,
              private uploadService: UploadFileService,
              private http: HttpClient,
              private toastr: ToastrService, private userService: UserService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isEdit=true;
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.authService.session$.subscribe(
      data => {
        this.session = data;
        if (this.session && this.session.token != null && this.session.role != null) {
          this.user.fullname = this.session.fullname;
          this.user.id = this.session.id;
          this.user.role = this.session.role;
          this.getUser();
        } else {
          this.toastr.error('Chưa đăng nhập!');
          this.router.navigate(['/']);
        }
      }
    );
  }
  changeEdit(){
    if(this.isEdit==false){
      window.location.reload();
    }
    console.log(this.isEdit)
    this.isEdit=!this.isEdit;
  }

  getUser() {
    if (this.id) {
      this.userService.getUser(this.id).subscribe(
        res => {
          if (res.success && res.data) {
            this.userShow=res.data;
            this.namefull=res.data.fullname;
            this.image_user_old=res.data.image_url;
          } else {
            this.toastr.error('Lỗi hoặc không đủ quyền thực hiện!');
          }
        });
    }
    else {
      this.toastr.error('Id lỗi!');
    }
  }
  doUpdateUser(){
    this.userService.updateUser(this.userShow).subscribe(
      res => {
        if (res.success && res.data) {
          this.toastr.success('Cập nhật thành công!');
          this.getUser();
        } else {
          console.log(res);
          this.toastr.error('Lỗi hoặc không đủ quyền thực hiện!');
        }
      });
  }
  selectFile(event) {
    const reader = new FileReader();
    this.selectedFiles = event.target.files;
    reader.readAsDataURL(event.target.files.item(0));
    console.log(reader.result);
    reader.onload = (e: any) =>this.imageSrc=e.target.result;
    if(this.imageSrc){
      this.isUpfile=true;
    }
    else {
      this.isUpfile=false;
    }

  }
  doUpFile(){
    const file = this.selectedFiles.item(0);
    console.log(this.selectedFiles.toString());
    console.log(file);
    console.log("upload file: ");
    if(file){
      this.uploadService.uploadFile(file).subscribe(dataFile => {
        // this.topicData.img = dataFile['Location'];
        console.log("RES  ");
        console.log(dataFile);
        // get current user
        this.userShow.image_url = "https://s3-us-west-2.amazonaws.com/babyandmom/" + dataFile["body"].name;

        this.toastr.info("Đang up file...","thông báo",{timeOut:20000});
        setTimeout( ()=> {

          this.userService.updateUser(this.userShow).subscribe(
            res => {
              if (res.success && res.data) {
                this.toastr.success('Cập nhật thành công!');
                this.getUser();
              } else {
                console.log(res);
                this.toastr.error('Lỗi hoặc không đủ quyền thực hiện!');
              }
            });
        },23000);
      });

    }
    else{
      this.toastr.error("Chưa chọn ảnh!")
    }
  }

}
