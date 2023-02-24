import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<User | null>;
  constructor(private auth: Auth, private router: Router) {
    this.user = user(this.auth);
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
}
