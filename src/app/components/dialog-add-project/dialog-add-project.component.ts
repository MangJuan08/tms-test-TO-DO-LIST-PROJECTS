import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MomentDateAdapter, provideMomentDateAdapter} from '@angular/material-moment-adapter';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'YYYY/MM/DD', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'YYYY/MM/DD', // this is how your date will get displayed on the Input
  }
};


@Component({
  selector: 'app-dialog-add-project',
  templateUrl: './dialog-add-project.component.html',
  styleUrl: './dialog-add-project.component.scss',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: "en-GB"},
    provideMomentDateAdapter(),
  ],
})
export class DialogAddProjectComponent {
  priorita: any;
  newProject: any;
  constructor(public dialogRef: MatDialogRef<DialogAddProjectComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newProject = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      utente: new FormControl(""),
      priorita: new FormControl(""),
      date: new FormControl("")
    });

    this.priorita = [
      { value: 'BASSA' },
      { value: 'MEDIA', },
      { value: 'ALTA' }];
  
  }

  addNewProject(project:any): void {
   
    this.dialogRef.close(this.newProject);
  }
}


