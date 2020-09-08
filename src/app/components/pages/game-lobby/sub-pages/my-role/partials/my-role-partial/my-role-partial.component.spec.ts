import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRolePartialComponent } from './my-role-partial.component';

describe('MyRolePartialComponent', () => {
  let component: MyRolePartialComponent;
  let fixture: ComponentFixture<MyRolePartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRolePartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRolePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
