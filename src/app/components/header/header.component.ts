import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  count: number | null = null;
  todos: Subscription | null = null;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.todos = this.service.getTodos().subscribe((todos) => {
      this.isLoading = false;
      this.count = todos.length;
    });
  }

  ngOnDestroy() {
    if (this.todos) {
      this.todos.unsubscribe();
    }
  }
}
