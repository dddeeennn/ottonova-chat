import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationHeaderComponent } from './conversation-header.component';
import { MaterialModule } from '../../../../material/material.module';

describe('ConversationHeaderComponent', () => {
  let component: ConversationHeaderComponent;
  let fixture: ComponentFixture<ConversationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationHeaderComponent],
      imports: [
        MaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
