import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser,isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'at-univ';

  platform : any ;

  constructor(@Inject(PLATFORM_ID) private platformId: Object){

    console.log('platform' ,platformId);

    console.log('browser: ',isPlatformBrowser(platformId));

    console.log('server: ',isPlatformServer(platformId));

    if(isPlatformBrowser(platformId)){
       this.platform = platformId;
    }

    if(isPlatformServer(platformId)){
       this.platform = platformId;
    }

  }
}
