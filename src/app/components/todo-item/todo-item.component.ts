import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: ITodo = {} as ITodo;
  checked = false;

  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.checked = this.item.completed;
  }

  toggleTodo(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.todo.completeTodo(this.item.id, target.checked);
  }

  deleteTodo() {
    this.todo.deleteTodo(this.item.id);
  }
}
