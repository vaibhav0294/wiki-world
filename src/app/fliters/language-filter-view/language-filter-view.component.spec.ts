import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFilterViewComponent } from './language-filter-view.component';

describe('LanguageFilterViewComponent', () => {
  let component: LanguageFilterViewComponent;
  let fixture: ComponentFixture<LanguageFilterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageFilterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
