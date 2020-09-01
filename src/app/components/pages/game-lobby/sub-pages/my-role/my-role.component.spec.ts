import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRoleComponent } from './my-role.component';

describe('MyRoleComponent', () => {
  let component: MyRoleComponent;
  let fixture: ComponentFixture<MyRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
