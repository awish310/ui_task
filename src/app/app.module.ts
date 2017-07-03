import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-view/header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainViewComponent } from './main-view/main-view.component';
import { YourSalesComponent } from './main-view/your-sales/your-sales.component';
import { ReportComponent } from './main-view/report/report.component';
import { TasksComponent } from './main-view/tasks/tasks.component';
import { MessagesComponent } from './main-view/messages/messages.component';
import { ActivityComponent } from './main-view/activity/activity.component';
import { ShareDataService } from "./sharedata.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainViewComponent,
    YourSalesComponent,
    ReportComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
