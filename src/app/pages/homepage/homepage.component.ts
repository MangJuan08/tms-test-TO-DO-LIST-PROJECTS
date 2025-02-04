import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../model/projects.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddProjectComponent } from '../../components/dialog-add-project/dialog-add-project.component';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  isLoading: any;
  newProjects: any;
  onProgressProjects: any;
  completeProjects: any;
  newProjectLength: any;
  onProgressProjectLength: any;
  completeProjectLength: any;
  quantityNewProjects$: any;
  quantityOnProgressProjects$: any;
  quantityCompleteProjects$: any;
  constructor(private projectService: ProjectsService, public dialog: MatDialog, private toastr: ToastrService) {
    this.isLoading = true;

    this.projectService.getAllProjects().subscribe((res: Projects[]) => {

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

    })

    this.quantityNewProjects$ = this.projectService.newProjectsQuantity.subscribe((res) => {
      this.newProjectLength = res;
      console.log(res)
    })

    this.quantityOnProgressProjects$ = this.projectService.onProgressProjectQuantity.subscribe((res) => {
      this.onProgressProjectLength = res;
      console.log(res)
    })

    this.quantityCompleteProjects$ = this.projectService.completeProjectQuantity.subscribe((res) => {
      this.completeProjectLength = res;
      console.log(res)
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }



  deleteProject(id: any) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.toastr.success('PROJECT DELETED COMPLETELY');
      this.reloadProjects();
    })
  }

  getFirstLetterOfNameAndSurname(completeName: any) {
    let nameParts = completeName.split(" ");
    let firstName = nameParts[0];
    let firstNameChar = firstName.charAt(0);
    if (nameParts.length > 1) {

      let lastName = nameParts[nameParts.length - 1];
      let lastNameChar = lastName.charAt(0);
      return firstNameChar + lastNameChar
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogAddProjectComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result !== 'undefined') {
        let newProject = {
          title: result.value.title,
          description: result.value.description,
          utente: result.value.utente,
          stato: "NUOVO",
          priorita: result.value.priorita
        }
        this.addNewProject(newProject);
      }
    });
  }

  addNewProject(result: any) {
    this.projectService.addNewProject(result).subscribe((res: any) => {
      this.toastr.success('TASK ADDED COMPLETELY');
      console.log(res)
      this.reloadProjects();
    });
  }

  editProject(result: any) {
    console.log(result)
    if (result.stato == 'COMPLETATO') {
      delete result["priorita"];
      this.projectService.editProject(result).subscribe((res: any) => {
        this.toastr.success('TASK MODIFIED COMPLETELY');
        this.reloadProjects();
      });
    }
    else {
      this.projectService.editProject(result).subscribe((res: any) => {
        this.toastr.success('TASK MODIFIED COMPLETELY');
        this.reloadProjects();
      });
    }

    console.log(result)
  }

  reloadProjects() {
    this.newProjects = [];
    this.completeProjects = [];
    this.onProgressProjects = [];
    this.projectService.getAllProjects().subscribe((res: Projects[]) => {
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
    })

    this.getLength();
  }

  getLength() {
    this.quantityNewProjects$ = this.projectService.newProjectsQuantity.subscribe((res) => {
      this.newProjectLength = res;
    })

    this.quantityOnProgressProjects$ = this.projectService.onProgressProjectQuantity.subscribe((res) => {
      this.onProgressProjectLength = res;
    })

    this.quantityCompleteProjects$ = this.projectService.completeProjectQuantity.subscribe((res) => {
      this.completeProjectLength = res;
    })
  }
}
