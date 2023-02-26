import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  isLoading = true;
  todos: ITodo[] = [];
  todosSub: Subscription | null = null;

  constructor(private todo: TodoService, public auth: AuthService) {}

  ngOnInit() {
    this.todosSub = this.todo.getTodos().subscribe((todos) => {
      this.isLoading = false;
      this.todos = todos;
    });
  }

  ngOnDestroy() {
    if (this.todosSub) {
      this.todosSub.unsubscribe();
    }
  }
}
