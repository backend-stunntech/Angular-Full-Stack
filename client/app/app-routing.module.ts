import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'generate-report',
    component:GenerateReportComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
