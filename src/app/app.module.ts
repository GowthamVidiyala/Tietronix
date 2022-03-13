import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ModelHomepageComponent } from './model-homepage/model-homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { MbseBaseComponent } from './mbse-base/mbse-base.component';
import { MbseModelComponent } from './mbse-model/mbse-model.component';
import { MbseModelListComponent } from './mbse-model-list/mbse-model-list.component';
import { MbseModelVarientComponent } from './mbse-model-varient/mbse-model-varient.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule } from '@angular/forms';
import { MyTestService } from './my-test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MapmodelComponent } from './mapmodel/mapmodel.component';
import { MapProjectComponent } from './map-project/map-project.component';
import { OrgProjectComponent } from './org-project/org-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    ProjectDashboardComponent,
    UserHomepageComponent,
    ModelHomepageComponent,
    MbseBaseComponent,
    MbseModelComponent,
    MbseModelListComponent,
    MbseModelVarientComponent,
    NewEmployeeComponent,
    NewProjectComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    MapmodelComponent,
    MapProjectComponent,
    OrgProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [MyTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = {AdminDashboardComponent,UserHomepageComponent,ModelHomepageComponent,ProjectDashboardComponent}