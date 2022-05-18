import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSurveyComponent } from './list-all-survey.component';

describe('ListAllSurveyComponent', () => {
  let component: ListAllSurveyComponent;
  let fixture: ComponentFixture<ListAllSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
