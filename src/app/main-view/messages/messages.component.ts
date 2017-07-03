import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messagesData = [
    {
      from: "Nine Jones",
      status: "5 minutes ago",
      text: "Hey You! it's me again :-) I attached new (...)",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    },
    {
      from: "Nine Jones",
      status: "About 20 hours ago",
      text: "Hey! I attached some new PSD files for (...)",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"
    },
    {
      from: "James Smith",
      status: "2 days ago",
      text: "Good morning, you are fired!",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    },
    {
      from: "Nine Jones",
      status: "About 2 weeks ago",
      text: "Hello! Could You bring me coffe please?",
      image: "https://legacy.3d.si.edu/sites/default/files/assets/model/27/cc11-thumb.jpg"  
    }
  ];

  constructor() {}

  ngOnInit() {}

}
