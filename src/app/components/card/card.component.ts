import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogEditProjectComponent } from '../dialog-edit-project/dialog-edit-project.component';
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
@Output() editProject= new EventEmitter<any>();;
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
  let dialogRef = this.dialog.open(DialogEditProjectComponent, {
    width: '500px',
    data: { id: project.id, description: project.description, stato: project.stato, user: project.user, title: project.title, priorita: project.priorita }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result)
    let editedProject = {
      id: result.value.id,
      title: result.value.title,
      description: result.value.description,
      user: result.value.user,
      stato: result.value.stato,
      priorita: result.value.priorita
    }
    this.editProject.emit(editedProject);
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
