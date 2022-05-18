import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ListAllSurveyComponent } from './list-all-survey/list-all-survey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewListItemComponent } from './view-list-item/view-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    ListAllSurveyComponent,
    HomePageComponent,
    ViewListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
