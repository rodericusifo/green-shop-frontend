import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-create-form',
  templateUrl: './order-create-form.component.html',
  styleUrls: ['./order-create-form.component.css'],
})
export class OrderCreateFormComponent implements OnInit {
  @Output() createOrder!: EventEmitter<{
    buyerName: string;
    buyerAddress: string;
    buyerPhoneNumber: string;
  }>;
  orderForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.createOrder = new EventEmitter<{
      buyerName: string;
      buyerAddress: string;
      buyerPhoneNumber: string;
    }>();
  }

  ngOnInit(): void {
    this.initOrderForm();
  }

  initOrderForm() {
    this.orderForm = this._fb.group({
      buyerName: [null, [Validators.required]],
      buyerAddress: [null, [Validators.required]],
      buyerPhoneNumber: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.createOrder.emit(this.orderForm.value);
  }
}
