import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-projectd',
  templateUrl: './dialog-add-projectd.component.html',
  styleUrl: './dialog-add-projectd.component.scss'
})
export class DialogAddProjectdComponent {

  newProject: any;
  constructor(public dialogRef: MatDialogRef<DialogAddProjectdComponent>,
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
