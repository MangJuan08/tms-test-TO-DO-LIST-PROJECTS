import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-edit-projectd',
  templateUrl: './dialog-edit-projectd.component.html',
  styleUrl: './dialog-edit-projectd.component.scss'
})
export class DialogEditProjectdComponent {
  editProject: any;
  constructor(public dialogRef: MatDialogRef<DialogEditProjectdComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editProject = new FormGroup({
      title: new FormControl(this.data.title),
      description: new FormControl(this.data.description),
      user: new FormControl(this.data.user),
      stato: new FormControl(this.data.stato),
    });
  }

  ngOnInit() {
    console.log(this.data)
  }

  
  edit(project:any): void {
    this.dialogRef.close(this.editProject);
  }
}
