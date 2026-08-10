import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo3 } from './signal-demo3';

describe('SignalDemo3', () => {
  let component: SignalDemo3;
  let fixture: ComponentFixture<SignalDemo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo3],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDemo3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
