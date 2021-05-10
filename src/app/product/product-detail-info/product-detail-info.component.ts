import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/Product-interface';

@Component({
  selector: 'app-product-detail-info',
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.css'],
})
export class ProductDetailInfoComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() {}

  ngOnInit(): void {}
}
