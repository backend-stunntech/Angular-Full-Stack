import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ServiceProvidersComponent} from './service-providers/service-providers.component';


@NgModule({
  imports: [
    CommonModule, 
    PagesRoutingModule
  ],
  declarations: [
    AboutComponent, 
    HomeComponent, 
    ServiceProvidersComponent
    
  ]
})
export class PagesModule { }
