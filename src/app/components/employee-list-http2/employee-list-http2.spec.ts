import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListHttp2 } from './employee-list-http2';

describe('EmployeeListHttp2', () => {
  let component: EmployeeListHttp2;
  let fixture: ComponentFixture<EmployeeListHttp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListHttp2],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeListHttp2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
