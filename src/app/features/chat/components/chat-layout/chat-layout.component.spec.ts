import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLayoutComponent } from './chat-layout.component';
import { MaterialModule } from '../../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ChatLayoutComponent', () => {
  let component: ChatLayoutComponent;
  let fixture: ComponentFixture<ChatLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatLayoutComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
