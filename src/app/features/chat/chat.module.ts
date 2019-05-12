import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
  ],
  declarations: [ChatComponent],
})
export class ChatModule { }
