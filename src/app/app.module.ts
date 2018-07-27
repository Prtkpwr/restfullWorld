import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from "@angular/common/http";

//other modules
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './region/region.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionComponent,
    SingleCountryComponent,
    CurrencyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'region/:region', component: RegionComponent },
      { path: 'country/:country', component: SingleCountryComponent },
      { path: 'language/:language', component: LanguageComponent, runGuardsAndResolvers: 'always' },
      { path: 'currency/:currency', component: CurrencyComponent, runGuardsAndResolvers: 'always' },

      // {path:'**',component:NotFoundComponent}
    ], { onSameUrlNavigation: 'reload' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
