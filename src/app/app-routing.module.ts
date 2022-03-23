import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { StudentComponent } from './admin/student/student.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { FinalComponent } from './pages/final/final.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subject/:id', component: SubjectComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'quiz/:id/ket-qua', component: FinalComponent },
  { path: 'admin', 
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "sinh-vien",
        component: StudentComponent
      },
      {
        path: "sinh-vien/add",
        component: AddStudentComponent
      },
      {
        path: "sinh-vien/edit/:id",
        component: EditStudentComponent
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
