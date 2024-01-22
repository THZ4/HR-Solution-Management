import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { EmployeeComponent } from './main-content/employee/main-employee/employee.component';
import { EventNewsComponent } from './main-content/event-news/event-news.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './main-content/employee/edit/edit.component';
import { AddComponent } from './main-content/employee/add/add.component';
import { AuthComponent } from './dashboard/navbar/auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    EmployeeComponent,
    EventNewsComponent,
    EditComponent,
    AddComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  
})
export class AppModule {}
