import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent {
  @Input() inputModel = '';
  @Output() inputModelChange = new EventEmitter<string>();
  @Output() handleButtonClick = new EventEmitter<MouseEvent>();
}
