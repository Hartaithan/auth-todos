import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signOut } from '@firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<User | null>;
  uid: string | null = null;
  isAuth = false;

  constructor(private auth: Auth, private router: Router) {
    this.user = user(this.auth);
    auth.onAuthStateChanged((user) => {
      this.isAuth = !!user;
      this.uid = user ? user.uid : null;
    });
  }

  async googleSignIn(): Promise<void> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('sign in error:', error);
      });
  }

  async signOut(): Promise<void> {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.error('sign out error:', error);
      });
  }
}
