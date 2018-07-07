import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServiceProvidersComponent} from './service-providers/service-providers.component';



const pagesRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service-providers', component: ServiceProvidersComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(pagesRoutes)]
})
export class PagesRoutingModule {}
