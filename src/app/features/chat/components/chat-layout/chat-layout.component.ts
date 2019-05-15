import { Component, Input, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { DisplayMode } from '../../../models/display-mode.enum';
import { appConfig } from '../../../../../assets/app-config';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnDestroy {
  private mobileQueryListener: () => void;
  private eventType = 'change';
  private subs: Subscription[] = [];

  mobileQuery: MediaQueryList;
  DisplayMode = DisplayMode;
  showListSub = new Subject();

  @Input() mode = DisplayMode.List;
  @Input() conversationListItemTemplate: TemplateRef<any>;
  @Input() conversationTemplate: TemplateRef<any>;
  @Input() conversationListContext: any;
  @Input() conversationContext: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia(`(max-width: ${appConfig.mobileSizePx}px)`);
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener(this.eventType, this.mobileQueryListener);
    this.subs = [this.showListSub.subscribe(() => this.showList())];
  }

  showDetails(): void {
    this.mode = DisplayMode.Details;
  }

  showList(): void {
    this.mode = DisplayMode.List;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener(this.eventType, this.mobileQueryListener);
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
