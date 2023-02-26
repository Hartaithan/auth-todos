import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  count: number | null = null;
  todosSub: Subscription | null = null;
  userSub: Subscription | null = null;
  user: User | null = null;

  constructor(private todo: TodoService, public auth: AuthService) {}

  ngOnInit() {
    this.todosSub = this.todo.getTodos().subscribe((todos) => {
      this.isLoading = false;
      this.count = todos.length;
    });
    this.userSub = this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    if (this.todosSub) {
      this.todosSub.unsubscribe();
    }
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  signOut() {
    this.auth.signOut();
  }
}
