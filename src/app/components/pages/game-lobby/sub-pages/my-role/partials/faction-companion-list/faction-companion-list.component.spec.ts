import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionCompanionListComponent } from './faction-companion-list.component';

describe('FactionCompanionListComponent', () => {
  let component: FactionCompanionListComponent;
  let fixture: ComponentFixture<FactionCompanionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionCompanionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionCompanionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
