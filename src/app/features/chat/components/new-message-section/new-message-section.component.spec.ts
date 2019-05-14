import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageSectionComponent } from './new-message-section.component';
import { MaterialModule } from '../../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewMessageSectionComponent', () => {
  let component: NewMessageSectionComponent;
  let fixture: ComponentFixture<NewMessageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewMessageSectionComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
