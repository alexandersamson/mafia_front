import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWishContainerComponent } from './last-wish-container.component';

describe('LastWishContainerComponent', () => {
  let component: LastWishContainerComponent;
  let fixture: ComponentFixture<LastWishContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastWishContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWishContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
