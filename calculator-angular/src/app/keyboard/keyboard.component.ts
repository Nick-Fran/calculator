import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  onPress(c: string, clear = false) {
    console.log("onPress clicked")
  }

  onCalculate() {
    console.log("onCalculate clicked")
  }
}
