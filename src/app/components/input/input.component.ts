import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputModel = '';
  @Input() label: string | null = null;
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() placeholder: HTMLInputElement['placeholder'] = '';
  @Output() inputModelChange = new EventEmitter<string>();
}
