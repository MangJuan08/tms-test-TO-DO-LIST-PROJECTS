import { Component } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tms-ineo-test';
}
