import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo4 } from './signal-demo4';

describe('SignalDemo4', () => {
  let component: SignalDemo4;
  let fixture: ComponentFixture<SignalDemo4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo4],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDemo4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
