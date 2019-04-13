import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from "../../services/authenticate.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
import {SessionVM} from "../../view-model/session/session-vm";
import {Role} from "../../view-model/roles/role-vm";
import {TypeService} from "../../services/reader/type_services";
import {TypePaging} from "../../view-model/type/type-paging";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public navItems: TypePaging;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public session: SessionVM;
  public showBanner: boolean = false;
  search_key: String;


  constructor(private authService: AuthenticateService,
              private router: Router,
              private toastr: ToastrService,
              private translate: TranslateService,
              private typeService: TypeService) {
  }

  ngOnInit() {
    // this.authService.session$.subscribe(
    //   data => {
    //     this.session = data;
    //     if (this.session && this.session.token != null && this.session.role != null) {
    //       switch (this.session.role.code) {
    //         case Role.ROLES.ADMIN: {
    //           this.navItems = adminNavItems;
    //           break;
    //         }
    //         case Role.ROLES.MEMBER: {
    //           this.navItems = hrNavItems;
    //           break;
    //         }
    //         default: {
    //           this.navItems = employe;
    //           break;
    //         }
    //       }
    //     } else {
    //       this.navItems = [];
    //     }
    //   }
    // );

    this.getMenu();
  }

  getMenu() {
    this.typeService.getTypesforMenu().subscribe(
      res => {
        if (res.success && res.data) {
          console.log(res.data);
          this.navItems = res.data;
        } else {
          this.toastr.error(res.message);
        }
      },
      error => {
        this.toastr.error(this.translate.instant('COMMON.GET.FAILED'));
      });
  }

  logout() {
    this.authService.clearSession();
    this.toastr.success(this.translate.instant('LOGOUT.SUCCESS'));
    this.router.navigate(['/login']);
  }
  search(){
    this.router.navigate(['/topics/search', this.search_key]);
  }

}
