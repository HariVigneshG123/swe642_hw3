import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surveyform } from './surveyform';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class SurveyformService {

  private baseURL = "http://localhost:8080/api/v1/surveys";

  constructor(private httpClient: HttpClient) { }

  // Method to fetch survey details based on id
  getSurveyDetails(id: number): Observable<Surveyform>
  {
    return this.httpClient.get<Surveyform>(`${this.baseURL}/${id}`);
  }

  // Method to hit on submit filled form
  createSurveyEntry(survey: Surveyform): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, survey);
  }

  //Method to get list of surveys
  getStudentIdList(): Observable<Surveyform[]>{
    return this.httpClient.get<Surveyform[]>(`${this.baseURL}`);
  }

}
