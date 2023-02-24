import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() isDisabled = false;
  @Input() width: boolean | number = false;
  @Output() handleClick = new EventEmitter();

  onClick() {
    this.handleClick.emit();
  }
}
