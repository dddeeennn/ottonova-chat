import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    PageContainerComponent
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
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StarRatingModule.forRoot(),
  ],
})
export class SharedModule { }
