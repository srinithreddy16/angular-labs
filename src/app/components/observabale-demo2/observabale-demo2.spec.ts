import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabaleDemo2 } from './observabale-demo2';

describe('ObservabaleDemo2', () => {
  let component: ObservabaleDemo2;
  let fixture: ComponentFixture<ObservabaleDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservabaleDemo2],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservabaleDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
