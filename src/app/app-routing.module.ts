import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainComponent } from './pages/main/main.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const unAuthToSignIn = () => redirectUnauthorizedTo(['sign-in']);
const authToMain = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainLayoutComponent,
    children: [{ path: '', component: MainComponent }],
    ...canActivate(unAuthToSignIn),
  },
  {
    path: 'sign-in',
    component: AuthLayoutComponent,
    children: [{ path: '', component: SignInComponent }],
    ...canActivate(authToMain),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
