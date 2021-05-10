import { Component, ElementRef, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
})
export class JumbotronComponent implements OnInit {
  constructor(@Inject('M') private _M: any, private _elRef: ElementRef) {}

  ngOnInit(): void {
    this.initParallax();
  }

  // Initialisator
  initParallax(): void {
    const parallaxs = this._elRef.nativeElement.querySelectorAll('.parallax');
    this._M.Parallax.init(parallaxs);
  }
}
