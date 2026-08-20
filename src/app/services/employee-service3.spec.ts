import { TestBed } from '@angular/core/testing';

import { EmployeeService3 } from './employee-service3';

describe('EmployeeService3', () => {
  let service: EmployeeService3;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
