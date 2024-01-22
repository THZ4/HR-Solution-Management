import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './main-content/employee/main-employee/employee.component';
import { EventNewsComponent } from './main-content/event-news/event-news.component';
import { EditComponent } from './main-content/employee/edit/edit.component';
import { AddComponent } from './main-content/employee/add/add.component';

const routes: Routes = [
  { path: 'eventNews', component: EventNewsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/edit/:id', component: EditComponent },
  { path: 'employee/add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
