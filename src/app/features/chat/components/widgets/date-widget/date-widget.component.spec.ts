import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWidgetComponent } from './date-widget.component';
import { MaterialModule } from '../../../../../material/material.module';

describe('DateWidgetComponent', () => {
  let component: DateWidgetComponent;
  let fixture: ComponentFixture<DateWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateWidgetComponent],
      imports: [
        MaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
