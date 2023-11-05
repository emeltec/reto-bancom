import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/public/login/login.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/public/landing/landing.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./views/private/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/public/login/login.module').then(m => m.LoginModule)
  },

  /// otra forma
  // {
  //   path: '', component: AppComponent,
  //   children: [
  //     {
  //       path: 'users',
  //       loadChildren: () => import('./views/private/users/users.module').then(m => m.UsersModule)
  //     },
  //   ]
  // },

  { path: 'home', component: LandingComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
