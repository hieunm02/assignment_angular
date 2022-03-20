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
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
