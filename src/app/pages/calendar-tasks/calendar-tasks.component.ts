import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../model/projects.model';

@Component({
  selector: 'app-calendar-tasks',
  templateUrl: './calendar-tasks.component.html',
  styleUrl: './calendar-tasks.component.scss'
})
export class CalendarTasksComponent {
  isLoading: any;
  public calendarOptions: any;
  constructor(private projectService: ProjectsService) {
    this.isLoading = true;
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin]
    };


    this.projectService.getAllProjects().subscribe((res: Projects[]) => {
      /*
            this.newProjects = res.filter((item: any) => {
              return item.stato == "NUOVO"
            })
      
            this.projectService.newProjectsQuantity.next(this.newProjects.length);
      
      
            this.onProgressProjects = res.filter((item: any) => {
              return item.stato == "PROGRESS"
            })
      
            this.projectService.onProgressProjectQuantity.next(this.onProgressProjects.length);
      
            this.completeProjects = res.filter((item: any) => {
              return item.stato == "COMPLETATO"
            })
      
            this.projectService.completeProjectQuantity.next(this.completeProjects.length);
      */

      console.log(res)
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 3000)

  }

}
