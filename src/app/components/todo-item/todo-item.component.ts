import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: ITodo = {} as ITodo;
  checked = false;

  ngOnInit() {
    this.checked = this.item.completed;
  }

  toggleTodo(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
  }

  deleteTodo() {
    console.log('item', this.item);
  }
}
