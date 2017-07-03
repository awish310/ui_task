import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class ShareDataService {
    
    navbarOpen = false;

    navbarStatus:EventEmitter<any> = new EventEmitter();
    
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
        this.navbarStatus.emit(this.navbarOpen);
        return this.navbarOpen;
    }
}