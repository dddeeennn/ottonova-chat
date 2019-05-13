import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteWidgetComponent } from './complete-widget.component';
import { MaterialModule } from '../../../../material/material.module';

describe('CompleteWidgetComponent', () => {
  let component: CompleteWidgetComponent;
  let fixture: ComponentFixture<CompleteWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteWidgetComponent],
      imports: [
        MaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
