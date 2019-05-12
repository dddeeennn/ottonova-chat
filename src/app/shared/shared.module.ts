import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PageContainerComponent } from './components/page-container/page-container.component';

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
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule { }
