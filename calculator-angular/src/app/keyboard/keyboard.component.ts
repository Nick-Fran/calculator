import { Component, EventEmitter, Output } from '@angular/core';
import { IOnPress } from '../utils/interfaces';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  @Output()
  onCalculateEvent = new EventEmitter();
  @Output()
  onPressEvent = new EventEmitter<IOnPress>();

  onCalculate() {
    this.onCalculateEvent.emit();
  }

  onPress(updated: string, clear = false) {
    this.onPressEvent.emit({
      updated,
      clear
    });
  }
}
