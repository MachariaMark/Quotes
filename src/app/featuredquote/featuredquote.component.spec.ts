import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedquoteComponent } from './featuredquote.component';

describe('FeaturedquoteComponent', () => {
  let component: FeaturedquoteComponent;
  let fixture: ComponentFixture<FeaturedquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
