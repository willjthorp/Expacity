import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ScPlayerComponent } from './components/sc-player/sc-player.component';
import { PagesHomeComponent } from './pages/pages-home/pages-home.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesSignupComponent } from './pages/pages-signup/pages-signup.component';
import { PagesPlaylistComponent } from './pages/pages-playlist/pages-playlist.component';
import { PagesProfileComponent } from './pages/pages-profile/pages-profile.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PagesCityinfoComponent } from './pages/pages-cityinfo/pages-cityinfo.component';
import { HeaderComponent } from './components/header/header.component';

import { CityService } from './services/city.service'

import { RouterModule, Routes } from '@angular/router';
import { ToptensComponent } from './pages/toptens/toptens.component';
import { PagesToptensComponent } from './pages/pages-toptens/pages-toptens.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: PagesHomeComponent },
  { path: 'cities/:id',  component: PagesCityinfoComponent },
  { path: 'toptens',  component: PagesToptensComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ScPlayerComponent,
    PagesHomeComponent,
    PagesLoginComponent,
    PagesSignupComponent,
    PagesPlaylistComponent,
    PagesProfileComponent,
    PlaylistComponent,
    HeaderComponent,
    PagesCityinfoComponent,
    ToptensComponent,
    PagesToptensComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
