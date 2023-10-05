import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  currentRoute!: string;
  isHome!: boolean
  isUser!: boolean

  constructor(private router: Router) {
    console.log(this.router.url);
    // router.events.pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(event => {
    //     // this.currentRoute = event.url;
    //     // const { url } = event
    //     console.log(event.urlAfterRedirects);
    // });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url
        this.isHome = this.currentRoute === '/'
        this.isUser = this.currentRoute === '/user'
      }
    });
  }
}
