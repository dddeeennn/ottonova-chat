import { Component, Input } from '@angular/core';
import { MapLocation } from '../../../../../shared/models/map-location.model';

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.scss']
})
export class MapWidgetComponent {
  @Input() id: number;
  @Input() model: MapLocation;
}
