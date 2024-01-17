import { Component } from '@angular/core';

@Component({
  selector: 'app-dev-prac',
  templateUrl: './dev-prac.component.html',
  styleUrls: ['./dev-prac.component.scss']
})
export class DevPracComponent {
 dataSource = [
   { name: 'apple', color: 'red'},
   { name: 'banana', color: 'yellow'},
   { name: 'cherry', color: 'red'},
   { name: 'durian', color: 'green'},
]
input: string = '';
test() {
  console.log('aaa')
}
addFruit() {
    this.dataSource.push({ name: this.input, color: 'unknown' });
    this.input = ''; // 清空输入框

}
}
