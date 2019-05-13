import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWidgetComponent } from './map-widget.component';
import { AgmCoreModule } from '@agm/core';

describe('MapWidgetComponent', () => {
  let component: MapWidgetComponent;
  let fixture: ComponentFixture<MapWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapWidgetComponent],
      imports: [AgmCoreModule.forRoot()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
