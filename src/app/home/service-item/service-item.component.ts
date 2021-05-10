import { Component, Input, OnInit } from '@angular/core';
import { IAppService } from 'src/app/shared/interfaces/AppService-interface';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css'],
})
export class ServiceItemComponent implements OnInit {
  @Input() service!: IAppService;

  constructor() {}

  ngOnInit(): void {}
}
