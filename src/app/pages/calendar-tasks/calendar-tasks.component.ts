import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-tasks',
  templateUrl: './calendar-tasks.component.html',
  styleUrl: './calendar-tasks.component.scss'
})
export class CalendarTasksComponent {

  public calendarOptions: any;
  constructor() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin]
    };
  }
  
}
