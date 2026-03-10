import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = "Lương Đức Hiệp";
  age = 21;

  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
};
