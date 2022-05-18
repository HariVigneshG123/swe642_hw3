import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surveyform } from '../surveyform';
import { SurveyformService } from '../surveyform.service';

@Component({
  selector: 'app-view-list-item',
  templateUrl: './view-list-item.component.html',
  styleUrls: ['./view-list-item.component.css']
})
export class ViewListItemComponent implements OnInit {

  id!:number
  survey!: Surveyform
  constructor(private route: ActivatedRoute, private surveyformservice: SurveyformService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.survey= new Surveyform();
    this.surveyformservice.getSurveyDetails(this.id).subscribe(data => {
      this.survey=data;
    })
  }

}
