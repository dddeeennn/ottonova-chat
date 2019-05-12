import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule',
  },
  {
    path: 'chat',
    loadChildren: './features/chat/chat.module#ChatModule',
  },
  {
    path: 'not-found',
    loadChildren: './features/errors/pages/not-found/not-found.module#NotFoundModule',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
