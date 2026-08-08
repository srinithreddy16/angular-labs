import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo4 } from './observable-demo4';

describe('ObservableDemo4', () => {
  let component: ObservableDemo4;
  let fixture: ComponentFixture<ObservableDemo4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemo4],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableDemo4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
