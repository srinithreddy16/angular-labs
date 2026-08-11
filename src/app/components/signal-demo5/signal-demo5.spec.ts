import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo5 } from './signal-demo5';

describe('SignalDemo5', () => {
  let component: SignalDemo5;
  let fixture: ComponentFixture<SignalDemo5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo5],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDemo5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
