import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './auth-guard.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuardService],
  },
  // otherwise redirect to home
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
