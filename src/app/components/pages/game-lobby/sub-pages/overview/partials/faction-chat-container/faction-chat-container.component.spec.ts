import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionChatContainerComponent } from './faction-chat-container.component';

describe('FactionChatContainerComponent', () => {
  let component: FactionChatContainerComponent;
  let fixture: ComponentFixture<FactionChatContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionChatContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
