import { Component, inject, Inject, signal } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MomentDateAdapter, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'YYYY/MM/DD', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'YYYY/MM/DD', // this is how your date will get displayed on the Input
    monthYearLabel: 'YYYY MMMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM'
  }
};


@Component({
  selector: 'app-dialog-add-project',
  templateUrl: './dialog-add-project.component.html',
  styleUrl: './dialog-add-project.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
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
      date: new FormControl(MAT_DATE_LOCALE)
    });

    this.priorita = [
      { value: 'BASSA' },
      { value: 'MEDIA', },
      { value: 'ALTA' }];

  }

  addNewProject(project: any): void {

    this.dialogRef.close(this.newProject);
  }
}


