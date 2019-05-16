import { AgmCoreModule } from '@agm/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StarRatingModule } from 'angular-star-rating';
import { MaterialModule } from '../../../../material/material.module';
import { AuthorType } from '../../../../shared/models/author-type.enum';
import { CommandType } from '../../../../shared/models/command-type.enum';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';
import { MapLocation } from '../../../../shared/models/map-location.model';
import { CompleteWidgetComponent } from '../widgets/complete-widget/complete-widget.component';
import { DateWidgetComponent } from '../widgets/date-widget/date-widget.component';
import { MapWidgetComponent } from '../widgets/map-widget/map-widget.component';
import { RateWidgetComponent } from '../widgets/rate-widget/rate-widget.component';
import { MessagesContainerComponent } from './messages-container.component';


describe('MessagesContainerComponent', () => {
  let component: MessagesContainerComponent;
  let fixture: ComponentFixture<MessagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagesContainerComponent,
        CompleteWidgetComponent,
        RateWidgetComponent,
        MapWidgetComponent,
        DateWidgetComponent,
      ],
      imports: [
        MaterialModule,
        StarRatingModule.forRoot(),
        AgmCoreModule.forRoot(),
      ]
    })
      .overrideComponent(MessagesContainerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
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

  it('should disply rate widget component', () => {
    component.messages = [new ConversationMessage(AuthorType.Bot, AuthorType.Bot, {
      type: CommandType.Rate,
      data: [1, 5],
    })];

    fixture.detectChanges();

    const rateWidget = fixture.debugElement.query(By.css('app-rate-widget'));
    expect(rateWidget).toBeTruthy();
  });

  it('should disply map widget component', () => {
    component.messages = [new ConversationMessage(AuthorType.Bot, AuthorType.Bot, {
      type: CommandType.Map,
      data: { lat: 40, lng: 40 } as MapLocation,
    })];

    fixture.detectChanges();

    const rateWidget = fixture.debugElement.query(By.css('app-map-widget'));
    expect(rateWidget).toBeTruthy();
  });

  it('should disply complete widget component', () => {
    component.messages = [new ConversationMessage(AuthorType.Bot, AuthorType.Bot, {
      type: CommandType.Complete,
      data: ['Yes', 'No'],
    })];

    fixture.detectChanges();

    const rateWidget = fixture.debugElement.query(By.css('app-complete-widget'));
    expect(rateWidget).toBeTruthy();
  });

  it('should disply complete widget component', () => {
    component.messages = [new ConversationMessage(AuthorType.Bot, AuthorType.Bot, {
      type: CommandType.Date,
      data: new Date(2019, 4, 17, 10, 30).toISOString(),
    })];

    fixture.detectChanges();

    const rateWidget = fixture.debugElement.query(By.css('app-date-widget'));
    expect(rateWidget).toBeTruthy();
  });
});
