import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmsHomeTestComponent } from './pages/tms-home-test/tms-home-test.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: TmsHomeTestComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
