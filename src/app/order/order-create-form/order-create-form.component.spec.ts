import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreateFormComponent } from './order-create-form.component';

describe('OrderCreateFormComponent', () => {
  let component: OrderCreateFormComponent;
  let fixture: ComponentFixture<OrderCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
