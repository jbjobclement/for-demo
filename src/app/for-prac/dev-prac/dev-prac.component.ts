import { Component } from '@angular/core';

@Component({
  selector: 'app-dev-prac',
  templateUrl: './dev-prac.component.html',
  styleUrls: ['./dev-prac.component.scss']
})
export class DevPracComponent {
  dataSource = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'cherry', color: 'red' },
    { name: 'durian', color: 'green' },
  ]
  input: string = '';
  color: string = '';
  alert: boolean = false;

  addFruit() {
    if (!this.input || !this.color) {
      this.alert = true
      return
    }
    this.dataSource.push({ name: this.input, color: this.color });
    this.input = '';
    this.color = '';

  }
}
