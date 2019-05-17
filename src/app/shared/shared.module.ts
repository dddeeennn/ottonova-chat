import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { StarRatingModule } from 'angular-star-rating';
import { AgmCoreModule } from '@agm/core';
import { appConfig } from '../../assets/app-config';

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    PageContainerComponent,
  ],
  entryComponents: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PageLayoutComponent,
    StarRatingModule,
    AgmCoreModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: appConfig.googleMapApiKey,
    })
  ],
})
export class SharedModule { }
