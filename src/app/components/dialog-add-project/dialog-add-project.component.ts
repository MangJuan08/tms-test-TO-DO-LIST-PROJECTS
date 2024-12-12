import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-project',
  templateUrl: './dialog-add-project.component.html',
  styleUrl: './dialog-add-project.component.scss'
})
export class DialogAddProjectComponent {

  newProject: any;
  constructor(public dialogRef: MatDialogRef<DialogAddProjectComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newProject = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      user: new FormControl(""),
    });
  }

  addNewProject(project:any): void {
   
    this.dialogRef.close(this.newProject);
  }
}
