import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  fullName = "Lương Đức Hiệp";
  age = 21;
  major = "Web Developer";

  clickMe() {
    alert("Máy tính của bạn đã nhiễm virut! :'>")
  }
}
