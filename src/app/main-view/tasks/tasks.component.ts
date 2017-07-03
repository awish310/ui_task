import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksData = [
    {
      text: "New website for Symu.co",
      status: "5 days delays",
      sign: 'N'
    },
    {
      text: "Free business PSD Template",
      status: "2 days delays",
      sign: 'F'
    },
    {
      text: "New logo for JCD.pl",
      status: "5 days left",
      sign: 'N'
    },
    {
      text: "Free Icons Set vol. 3",
      status: "10 days left",
      sign: 'F'
    }
  ];
  constructor() {}

  ngOnInit() {}

}
