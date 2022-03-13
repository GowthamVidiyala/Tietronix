import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ModelHomepageComponent } from './model-homepage/model-homepage.component';
import { LoginComponent } from './login/login.component';
import { MbseBaseComponent } from './mbse-base/mbse-base.component';
import { MbseModelVarientComponent } from './mbse-model-varient/mbse-model-varient.component';
import { MbseModelComponent } from './mbse-model/mbse-model.component';
import { MbseModelListComponent } from './mbse-model-list/mbse-model-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { MapmodelComponent } from './mapmodel/mapmodel.component';
import { MapProjectComponent } from './map-project/map-project.component';
import { OrgProjectComponent } from './org-project/org-project.component';

const routes: Routes = [
  {path : '', component : LoginComponent}, 
  {path : 'admindashboard', component : AdminDashboardComponent}, 
  {path : 'projectdashboard', component : ProjectDashboardComponent}, 
  {path : 'userdashboard', component : UserHomepageComponent}, 
  {path : 'modeldashboard', component : ModelHomepageComponent}, 
  {path : 'MBSEBase', component : MbseBaseComponent}, 
  {path : 'MBSEVarient', component : MbseModelVarientComponent}, 
  {path : 'MBSEModel', component : MbseModelComponent}, 
  {path : 'MBSEModelList', component : MbseModelListComponent},
  {path : 'MapModel', component : MapmodelComponent}, 
  {path : 'newproject', component : NewProjectComponent}, 
  {path : 'addemployee', component : AddemployeeComponent}, 
  {path : 'mapproject', component : MapProjectComponent}, 
  {path : 'orgproject', component : OrgProjectComponent}, 
  {path : 'newemployee', component : NewEmployeeComponent}, 
  {path : 'employeelist', component : EmployeelistComponent} 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
