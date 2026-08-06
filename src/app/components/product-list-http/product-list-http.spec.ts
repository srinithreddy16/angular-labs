import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHttp } from './product-list-http';

describe('ProductListHttp', () => {
  let component: ProductListHttp;
  let fixture: ComponentFixture<ProductListHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
