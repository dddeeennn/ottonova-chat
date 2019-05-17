import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Core module can be imported only in AppModule.');
    }
  }
}
