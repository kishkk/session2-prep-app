import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageLibraryComponent } from './manage-library/manage-library.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AnnualMaintenanceComponent } from './annual-maintenance/annual-maintenance.component';
import { ErrorComponent } from './error/error.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ProjectComponent,
    MasterDataComponent,
    SettingsComponent,
    ManageLibraryComponent,
    UserManagementComponent,
    AnnualMaintenanceComponent,
    ErrorComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
