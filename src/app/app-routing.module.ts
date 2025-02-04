import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmsHomeTestComponent } from './pages/tms-home-test/tms-home-test.component';
import { CalendarTasksComponent } from './pages/calendar-tasks/calendar-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TmsHomeTestComponent,
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
