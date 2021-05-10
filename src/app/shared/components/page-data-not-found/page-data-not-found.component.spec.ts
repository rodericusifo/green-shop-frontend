import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDataNotFoundComponent } from './page-data-not-found.component';

describe('PageDataNotFoundComponent', () => {
  let component: PageDataNotFoundComponent;
  let fixture: ComponentFixture<PageDataNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDataNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDataNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
