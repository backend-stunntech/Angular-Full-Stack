import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, AdminComponent, GenerateReportComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
