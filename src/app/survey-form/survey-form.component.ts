import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Surveyform } from '../surveyform';
import { SurveyformService } from '../surveyform.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  survey: Surveyform= new Surveyform();
  selectedmostLiked:any =[];
  constructor(private surveyformservice: SurveyformService,private router:Router) { }
  ngOnInit(): void {
  }

  mostLiked = [
      {
      "key": "Students","value":"Students",
      },
      {
      "key": "Location","value":"Location",
      },
      {
        "key": "Campus","value":"Campus",
      },
      {
        "key": "Atmosphere","value":"Atmosphere",
      },
      {
        "key": "Drom rooms","value":"Drom rooms",
      },
      {
        "key": "Others","value":"Others",
      }
  ]

    
  mostLikedChange(event){
    let index= this.selectedmostLiked.indexOf(event.target.value);
    if(index==-1)
    {
      this.selectedmostLiked.push(event.target.value);
    }
    else{
      this.selectedmostLiked.splice(index,1);
    }
    this.survey.mostLiked=this.selectedmostLiked.toString();
    console.log(this.survey.mostLiked);
  } 

  knowaboutus = [
    {id: '1', value: 'Friends'},
    {id: '2', value: 'Television'},
    {id: '3', value: 'Internet'},
    {id: '4', value: 'Other'}
  ]

  saveSurveyForm(){
    this.surveyformservice.createSurveyEntry(this.survey).subscribe(data=>{
      console.log(data);
      this.goToSurveyList();
    },
    error=>console.log(error));
  }

  goToSurveyList(){
    this.router.navigate(['/list-all-survey'])
  }
  onSubmit(){
    console.log(this.survey);
    alert("Thanks for your Feedback!!");
    this.saveSurveyForm();
  }
  cancel(){
    this.router.navigate(['/list-all-survey'])
  }


}

