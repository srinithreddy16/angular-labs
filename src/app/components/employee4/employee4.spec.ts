import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee4 } from './employee4';

describe('Employee4', () => {
  let component: Employee4;
  let fixture: ComponentFixture<Employee4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employee4],
    }).compileComponents();

    fixture = TestBed.createComponent(Employee4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
