import { Component, Input, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { DisplayMode } from '../../../models/display-mode.enum';
import { appConfig } from '../../../../../assets/app-config';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnDestroy {
  private mobileQueryListener: () => void;
  private eventType = 'change';

  mobileQuery: MediaQueryList;
  DisplayMode = DisplayMode;

  @Input() mode = DisplayMode.List;
  @Input() conversationListItemTemplate: TemplateRef<any>;
  @Input() conversationTemplate: TemplateRef<any>;
  @Input() conversationListContext: any;
  @Input() conversationContext: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia(`(max-width: ${appConfig.mobileSizePx}px)`);
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener(this.eventType, this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener(this.eventType, this.mobileQueryListener);
  }
}
