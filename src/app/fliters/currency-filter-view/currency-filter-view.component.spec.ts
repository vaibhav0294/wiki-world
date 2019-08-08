import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFilterViewComponent } from './currency-filter-view.component';

describe('CurrencyFilterViewComponent', () => {
  let component: CurrencyFilterViewComponent;
  let fixture: ComponentFixture<CurrencyFilterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyFilterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
