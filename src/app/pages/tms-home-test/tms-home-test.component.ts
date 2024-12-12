import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../model/projects.model';

@Component({
  selector: 'app-tms-home-test',
  templateUrl: './tms-home-test.component.html',
  styleUrl: './tms-home-test.component.scss'
})
export class TmsHomeTestComponent {

  isLoading: any;
  newProjects:any;
  onProgressProjects: any;
  completeProjects: any;
  constructor(private projectService: ProjectsService) {
    this.isLoading = true;

    this.projectService.getAllProjects().subscribe((res:Projects[]) => {
      this.newProjects = res.filter((item:any) => {
        return item.stato == "NUOVO"
      })

      this.onProgressProjects = res.filter((item:any) => {
        return item.stato == "PROGRESS"
      })

      this.completeProjects = res.filter((item:any) => {
        return item.stato == "COMPLETATO"
      })
      console.log(this.newProjects)
      console.log(this.onProgressProjects)
      console.log(this.completeProjects)
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }



  deleteProject(id:any) {
    this.projectService.deleteProject(id).subscribe(()=> {
      this.reloadProjects();
    })
  }

  reloadProjects() {

    
    this.newProjects = [];
    this.completeProjects = [];
    this.onProgressProjects = [];
    this.projectService.getAllProjects().subscribe((res:Projects[]) => {
      this.newProjects = res.filter((item:any) => {
        return item.stato == "NUOVO"
      })

      this.onProgressProjects = res.filter((item:any) => {
        return item.stato == "PROGRESS"
      })

      this.completeProjects = res.filter((item:any) => {
        return item.stato == "COMPLETATO"
      })
      console.log(this.newProjects)
      console.log(this.onProgressProjects)
      console.log(this.completeProjects)
    })
  }
}
