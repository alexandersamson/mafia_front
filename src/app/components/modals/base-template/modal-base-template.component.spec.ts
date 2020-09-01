import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBaseTemplateComponent } from './modal-base-template.component';

describe('ModalBaseTemplateComponent', () => {
  let component: ModalBaseTemplateComponent;
  let fixture: ComponentFixture<ModalBaseTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBaseTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBaseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
