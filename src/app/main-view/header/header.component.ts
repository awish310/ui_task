import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../../sharedata.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  navbarOpen: boolean;

  constructor(private shareDataService: ShareDataService) {
    this.navbarOpen = false;
  }

  ngOnInit() {}

  toggleNavbar() {
      this.shareDataService.toggleNavbar();
      this.navbarOpen = !this.navbarOpen;
  }
}
