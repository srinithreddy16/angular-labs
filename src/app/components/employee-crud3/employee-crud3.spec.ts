import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrud3 } from './employee-crud3';

describe('EmployeeCrud3', () => {
  let component: EmployeeCrud3;
  let fixture: ComponentFixture<EmployeeCrud3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrud3],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCrud3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
