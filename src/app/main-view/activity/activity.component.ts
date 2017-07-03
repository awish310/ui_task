import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activitiesData = [
    {
      from: "Nine Jones",
      status: "Just now",
      action: "added a new project",
      project: "Free UI Kit",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    },
    {
      from: "James Smith",
      status: "40 minutes ago",
      action: "commented project",
      project: "Free PSD Template",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    },
    {
      from: "Alex Clooney",
      status: "1 hour ago",
      action: "completed task",
      project: "Symu Website",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    },
    {
      from: "Alexandra Spears",
      status: "3 hours ago",
      action: "added a new project",
      project: "Free PSD Template",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    }
  ];
  constructor() {}

  ngOnInit() {}
}
