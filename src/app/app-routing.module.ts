import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CalendarTasksComponent } from './pages/calendar-tasks/calendar-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'calendar',
    component: CalendarTasksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
