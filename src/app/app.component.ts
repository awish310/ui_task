import { Component } from '@angular/core';
import { ShareDataService } from "./sharedata.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  navbarOpen: boolean;

  constructor(private shareDataService: ShareDataService) {
    
  }

  ngOnInit() {
    this.navbarOpen =  this.shareDataService.navbarOpen;
    this.shareDataService.navbarStatus.subscribe(
      status => {
        this.navbarOpen = status;
      }
    );
  }
  
}
