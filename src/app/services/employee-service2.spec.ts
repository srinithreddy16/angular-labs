import { TestBed } from '@angular/core/testing';

import { EmployeeService2 } from './employee-service2';

describe('EmployeeService2', () => {
  let service: EmployeeService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
