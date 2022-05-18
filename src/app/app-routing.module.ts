import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllSurveyComponent } from './list-all-survey/list-all-survey.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ViewListItemComponent } from './view-list-item/view-list-item.component';

const routes: Routes = [
  {path:'home-page', component: SurveyFormComponent},
  {path:'list-all-survey', component: ListAllSurveyComponent},
  {path:'survey-form', component: SurveyFormComponent},
  /*{path:'list-all-survey/view-list-item', component: ViewListItemComponent},*/
  {path: 'list-all-survey/view-list-item/:id', component: ViewListItemComponent},
  {path:'',redirectTo:'list-all-survey',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
