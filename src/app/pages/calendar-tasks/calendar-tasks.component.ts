import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../model/projects.model';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar-tasks',
  templateUrl: './calendar-tasks.component.html',
  styleUrl: './calendar-tasks.component.scss'
})
export class CalendarTasksComponent {
  isLoading: any;
  public calendarOptions: any;
  public taskEvents: any;
  constructor(private projectService: ProjectsService) {
    this.isLoading = true;

    this.projectService.getAllProjects().subscribe((res: any) => {

      this.taskEvents = res
      console.log(res)
 
      this.taskEvents = res.filter((item: any) => {
        return item.date && item.title
      })
      this.initializeCalendar(this.taskEvents);
    })
    
   

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)

  }

  ngOnInit() {
  
  
  }


  initializeCalendar(tasks:any) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      weekends: false,
      plugins: [dayGridPlugin, interactionPlugin],
      events: tasks,
      dateClick: (arg: any) => this.handleDateClick(arg)
    }; 
  }

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr);
  }

}
