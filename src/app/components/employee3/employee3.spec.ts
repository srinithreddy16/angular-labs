import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee3 } from './employee3';

describe('Employee3', () => {
  let component: Employee3;
  let fixture: ComponentFixture<Employee3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employee3],
    }).compileComponents();

    fixture = TestBed.createComponent(Employee3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
