import { TestBed } from '@angular/core/testing';

import { EmployeeHttp } from './employee-http';

describe('EmployeeHttp', () => {
  let service: EmployeeHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
