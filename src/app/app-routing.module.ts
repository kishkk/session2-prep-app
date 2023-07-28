import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { SettingsComponent } from './settings/settings.component';
import { AnnualMaintenanceComponent } from './annual-maintenance/annual-maintenance.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ManageLibraryComponent } from './manage-library/manage-library.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'manage-library', component: ManageLibraryComponent },
  { path: 'annual-maintenance', component: AnnualMaintenanceComponent },
  { path: 'master-data', component: MasterDataComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
