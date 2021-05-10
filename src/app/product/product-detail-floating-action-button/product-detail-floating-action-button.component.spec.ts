import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailFloatingActionButtonComponent } from './product-detail-floating-action-button.component';

describe('ProductDetailFloatingActionButtonComponent', () => {
  let component: ProductDetailFloatingActionButtonComponent;
  let fixture: ComponentFixture<ProductDetailFloatingActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailFloatingActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailFloatingActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
