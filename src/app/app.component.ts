import { Component } from '@angular/core';
import {Project} from './ngez-gantt/interfaces/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngez-gantt';
  project: Project = {
    id: 1,
    name: 'activity one',
    start: new Date('2018-08-16T23:00:00.000Z'),
    tasks: [
      {
        id: 1,
        name: 'task one',
        start: new Date('2018-05-16T23:00:00.000Z'),
        end: new Date('2018-08-30T23:00:00.000Z'),
        percentComplete: 25,
        status: 'in progress',
        target: 10,
        actual: 2,
        budget: 2000
      },
      {
        id: 2,
        name: 'task two',
        start: new Date('2018-01-16T23:00:00.000Z'),
        end: new Date('2018-08-16T23:00:00.000Z'),
        percentComplete: 100,
        status: 'completed',
        target: 10,
        actual: 2,
        budget: 2000
      }
    ]
  };
}
