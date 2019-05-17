import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from '../header/header.component';
import { PageContainerComponent } from '../page-container/page-container.component';
import { MaterialModule } from '../../../material/material.module';

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageLayoutComponent,
        HeaderComponent,
        PageContainerComponent,
      ],
      imports: [
        MaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
