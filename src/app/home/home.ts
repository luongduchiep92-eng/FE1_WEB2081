import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'my-app';
  fullName = "Lương Đức Hiệp";
  age = 21;

  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
