import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { SelectModule } from 'ng2-select';
import { MdSelectModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { ToolTipModule } from 'angular2-tooltip'
import { FileUploadModule } from 'ng2-file-upload'

import { AppComponent } from './app.component';
import { PagesHomeComponent } from './pages/pages-home/pages-home.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesSignupComponent } from './pages/pages-signup/pages-signup.component';
import { PagesProfileComponent } from './pages/pages-profile/pages-profile.component';
import { PagesCityinfoComponent } from './pages/pages-cityinfo/pages-cityinfo.component';
import { PagesForumComponent } from './pages/pages-forum/pages-forum.component';
import { PagesAboutComponent } from './pages/pages-about/pages-about.component';
import { PagesCompareComponent } from './pages/pages-compare/pages-compare.component';
import { PagesSearchcitiesComponent } from './pages/pages-searchcities/pages-searchcities.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { ClimateGraphComponent } from './components/climate-graph/climate-graph.component';
import { HeaderComponent } from './components/header/header.component';

import { CityService } from './services/city.service';
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';

import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { CompareGraphComponent } from './components/compare-graph/compare-graph.component';;

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: PagesHomeComponent },
  { path: 'cities/:id',  component: PagesCityinfoComponent },
  { path: 'about',  component: PagesAboutComponent },
  { path: 'forum',  component: PagesForumComponent },
  { path: 'compare',  component: PagesCompareComponent },
  { path: 'citysearch',  component: PagesSearchcitiesComponent },
  { path: 'auth/login',  component: PagesLoginComponent },
  { path: 'auth/signup',  component: PagesSignupComponent },
  { path: 'profile', component: PagesProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PagesHomeComponent,
    PagesLoginComponent,
    PagesSignupComponent,
    PagesProfileComponent,
    HeaderComponent,
    PagesCityinfoComponent,
    PagesAboutComponent,
    PagesForumComponent,
    PagesCompareComponent,
    PagesSearchcitiesComponent,
    AuthLoginComponent,
    AuthLogoutComponent,
    AuthSignupComponent,
    AuthUserComponent,
    ClimateGraphComponent,
    QuestionFormComponent,
    QuestionListComponent,
    QuestionCardComponent,
    CompareGraphComponent,
    MdSelectModule,
    // Parallax,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    SelectModule,
    MdSelectModule,
    MdTooltipModule,
    ToolTipModule,
    FileUploadModule
  ],
  providers: [CityService, AuthService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
