import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRolesListComponent } from './selected-roles-list.component';

describe('SelectedRolesListComponent', () => {
  let component: SelectedRolesListComponent;
  let fixture: ComponentFixture<SelectedRolesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedRolesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
