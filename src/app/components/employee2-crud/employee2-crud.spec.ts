import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee2CRUD } from './employee2-crud';

describe('Employee2CRUD', () => {
  let component: Employee2CRUD;
  let fixture: ComponentFixture<Employee2CRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employee2CRUD],
    }).compileComponents();

    fixture = TestBed.createComponent(Employee2CRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
