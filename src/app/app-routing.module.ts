import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    component: CoursesComponent,
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
