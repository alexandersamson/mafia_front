import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMainMenuComponent } from './nav-main-menu.component';

describe('NavMainMenuComponent', () => {
  let component: NavMainMenuComponent;
  let fixture: ComponentFixture<NavMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
