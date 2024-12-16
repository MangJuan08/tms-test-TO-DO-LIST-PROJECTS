import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmsHomeTestComponent } from './pages/tms-home-test/tms-home-test.component';

const routes: Routes = [
  {
    path: '',
    component: TmsHomeTestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
