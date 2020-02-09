import { Component, OnDestroy } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  
  isDashboard =false;
  subscription:Subscription = new Subscription();

  constructor(private router: Router,private title:Title) {
    this.title.setTitle('Contract portal')
   let sub = this.
      router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe(x => {
        if(x['url'].includes("/login")){
         this.isDashboard = false; 
        } else if(x['url'].includes("/dashboard")) {
          this.isDashboard = true;
        }
      });
      this.subscription.add(sub);
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
