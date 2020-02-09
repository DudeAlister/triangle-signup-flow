import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/uesr.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private userService:UserService,private translate:TranslateService) {

   }

  ngOnInit() {
    this.userService.languagePrefSubject.subscribe(x=>this.translate.setDefaultLang(x.selectedLanguage || 'en'));
  }

}
