import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FinalComponent } from './pages/final/final.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentComponent } from './admin/student/student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './pipes/gender/gender.pipe';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { SubjectAdminComponent } from './admin/subject-admin/subject-admin.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { EditSubjectComponent } from './admin/edit-subject/edit-subject.component';
import { QuestionComponent } from './admin/question/question.component';
import { AnswerComponent } from './admin/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    SubjectComponent,
    QuizComponent,
    FinalComponent,
    AdminLayoutComponent,
    DashboardComponent,
    StudentComponent,
    AddStudentComponent,
    GenderPipe,
    EditStudentComponent,
    SubjectAdminComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    QuestionComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
