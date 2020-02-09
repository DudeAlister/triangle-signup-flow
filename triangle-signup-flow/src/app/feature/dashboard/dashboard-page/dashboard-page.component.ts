import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription} from "rxjs";
import { UserService } from 'src/app/shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit ,OnDestroy{


  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  subscription:Subscription = new Subscription();

  constructor(private userService: UserService, private translate: TranslateService) {

  }

  ngOnInit() {
  // language selection  behaviour subject
    this.subscription.add( this.userService.languagePrefSubject.subscribe(x => this.translate.setDefaultLang(x.selectedLanguage || 'en')));
    //toggling the side 
    this.subscription.add( this.userService.toggleSubject.subscribe(x => this.sidenav.toggle()));
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
