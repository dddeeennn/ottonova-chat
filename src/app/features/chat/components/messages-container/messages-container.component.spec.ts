import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesContainerComponent } from './messages-container.component';
import { MaterialModule } from '../../../../material/material.module';

describe('MessagesContainerComponent', () => {
  let component: MessagesContainerComponent;
  let fixture: ComponentFixture<MessagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesContainerComponent],
      imports: [
        MaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
