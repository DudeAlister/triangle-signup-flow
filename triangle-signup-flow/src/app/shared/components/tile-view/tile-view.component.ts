import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent implements OnInit,OnDestroy {

subscription:Subscription = new Subscription();
  constructor(private translate:TranslateService,private userService:UserService) {

   }

  ngOnInit() {
   this.subscription.add( this.userService.languagePrefSubject.subscribe(x=> this.translate.setDefaultLang(x.selectedLanguage)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
