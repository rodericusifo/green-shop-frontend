import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/Product-interface';

@Component({
  selector: 'app-product-detail-description',
  templateUrl: './product-detail-description.component.html',
  styleUrls: ['./product-detail-description.component.css'],
})
export class ProductDetailDescriptionComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() {}

  ngOnInit(): void {}
}
