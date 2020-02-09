import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'triangle-signup-flow';
  isDashboard =false;
  subscription:Subscription = new Subscription();

  constructor(private router: Router) {
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
