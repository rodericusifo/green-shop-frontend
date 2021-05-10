import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/Product-interface';

@Component({
  selector: 'app-product-detail-image',
  templateUrl: './product-detail-image.component.html',
  styleUrls: ['./product-detail-image.component.css'],
})
export class ProductDetailImageComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() {}

  ngOnInit(): void {}
}
