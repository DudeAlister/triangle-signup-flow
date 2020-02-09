import { Component, OnInit, ViewChild, TemplateRef, Input, AfterContentChecked, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked ,OnDestroy{
  @Input() isDashboard = false;
  @ViewChild('dashboardHeader', { static: false }) dashboard: TemplateRef<any>;
  @ViewChild('loginHeader', { static: false }) login: TemplateRef<any>;
  selectedTemplate: TemplateRef<any>;
  subscription:Subscription = new Subscription();

  constructor(private translateService: TranslateService, private userService: UserService,private route:Router) { }

  ngOnInit() {

    this.subscription.add(this.userService.languagePrefSubject.subscribe(x => { this.translateService.setDefaultLang(x.selectedLanguage) }));
  }

  ngAfterContentChecked(): void {
    if (!this.dashboard || !this.login) {
      return;
    }
    this.selectedTemplate = this.isDashboard ? this.dashboard : this.login
  }


  toggle() {
    this.userService.toggleSubject.next(null);
  }

  navigateToLogin(){
    localStorage.setItem('currentUser','null');
    this.route.navigateByUrl('/login');

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
