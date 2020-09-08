import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGameComponent } from './public-game.component';

describe('PublicGameComponent', () => {
  let component: PublicGameComponent;
  let fixture: ComponentFixture<PublicGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
