import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerBarComponent } from './divider-bar.component';

describe('DividerBarComponent', () => {
  let component: DividerBarComponent;
  let fixture: ComponentFixture<DividerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
