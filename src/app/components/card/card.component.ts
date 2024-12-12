import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogEditProjectdComponent } from '../dialog-edit-projectd/dialog-edit-projectd.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() projects: any;
@Input() num: any;
@Output() deleteProject= new EventEmitter<any>();;
total: any;
@Input() totalLength: any;
constructor(public dialog: MatDialog) {
}

ngOnInit() {
  this.total +=this.num;
  console.log(this.totalLength)
}

deleteProjectR(id:any) {
this.deleteProject.emit(id)
}

openDialog(project:any) {
  let dialogRef = this.dialog.open(DialogEditProjectdComponent, {
    width: '500px',
    data: { id: project.id, description: project.description, stato: project.stato, user: project.user, title: project.title }
  });

  dialogRef.afterClosed().subscribe(result => {

  });
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
}
