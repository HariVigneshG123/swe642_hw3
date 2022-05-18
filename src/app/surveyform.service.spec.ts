import { TestBed } from '@angular/core/testing';

import { SurveyformService } from './surveyform.service';

describe('SurveyformService', () => {
  let service: SurveyformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
