import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleProfileContainerComponent } from './role-profile-container.component';

describe('RoleProfileContainerComponent', () => {
  let component: RoleProfileContainerComponent;
  let fixture: ComponentFixture<RoleProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleProfileContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
