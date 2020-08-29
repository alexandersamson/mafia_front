import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGamesListComponent } from './public-games-list.component';

describe('PublicGamesListComponent', () => {
  let component: PublicGamesListComponent;
  let fixture: ComponentFixture<PublicGamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicGamesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
