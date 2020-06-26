import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './service/student.service';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchStudentsComponent } from './components/search-students/search-students.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes:Routes =[
  {path:'',component:StudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'all-students',component:StudentComponent},
  {path:'update-student',component:UpdateStudentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    StudentMenuComponent,
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    SearchStudentsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    Ng2SearchPipeModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
