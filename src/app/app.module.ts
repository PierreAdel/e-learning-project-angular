import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CoursesComponent } from './courses/courses.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesService } from './courses.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './loader/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CoursesComponent,
    ArticlesComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    CourseDetailComponent,
    ArticleDetailComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, MatProgressBarModule],
  providers: [AuthGuardService, AuthenticationService, CoursesService, {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
