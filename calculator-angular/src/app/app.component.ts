import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { DECIMAL_LENGTH, MATH_OPERATOR, MATH_OPERATORS } from './utils/constants';
import { IOnPress } from './utils/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayComponent, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-angular';
  expression = '';

  onCalculate() {
    let result = 0;
    const mathOperator = MATH_OPERATORS.filter(item => this.expression.includes(item))[0]

    const [num1Str, num2Str] = this.expression.split(mathOperator);

    const num1 = parseInt(num1Str, 10)
    const num2 = parseInt(num2Str, 10)

    switch (mathOperator) {
      case MATH_OPERATOR.add:
        {
          result = num1 + num2;
          break;
        }
      case MATH_OPERATOR.subtract:
        {
          result = num1 - num2;
          break;
        }
      case MATH_OPERATOR.multiply:
        {
          result = num1 * num2;
          break;
        }
      case MATH_OPERATOR.divide:
        {
          if (num2 !== 0) {
            result = num1 / num2;
            const [, fraction] = result.toString().split(".")
            if (fraction) {
              if (fraction.length > DECIMAL_LENGTH) {
                result = parseFloat(result.toFixed(DECIMAL_LENGTH))
              }
              else {
                result = parseFloat(result.toFixed(fraction.length))
              }
            }
          }
          else {
            result = NaN;
          }
          break;
        }
    }
    this.expression = `${result}`;
  }

  onPress($event: IOnPress) {
    const { clear, updated } = $event;
    if (clear) {
      this.expression = '0';
      return;
    }

    if (MATH_OPERATORS.some(item => item === updated)) {
      if (MATH_OPERATORS
        .filter(item => item !== MATH_OPERATOR.subtract)
        .some(item => this.expression.includes(item))
      ) {
        // TODO: calculate current expression
        return;
      }

      const prev = this.expression;
      this.expression = `${prev}${updated}`
      return
    }

    if (this.expression !== '0') {
      const prev = this.expression;
      this.expression = `${prev}${updated}`
    }
    else {
      this.expression = updated
    }
  }
}
