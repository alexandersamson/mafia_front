import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsCounterGraphComponent } from './seats-counter-graph.component';

describe('SeatsCounterGraphComponent', () => {
  let component: SeatsCounterGraphComponent;
  let fixture: ComponentFixture<SeatsCounterGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsCounterGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsCounterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
