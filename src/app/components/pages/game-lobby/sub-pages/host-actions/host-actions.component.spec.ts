import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostActionsComponent } from './host-actions.component';

describe('HostActionsComponent', () => {
  let component: HostActionsComponent;
  let fixture: ComponentFixture<HostActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
