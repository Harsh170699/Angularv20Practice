import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  productPrice: number = 12500;
  maxlength:number = 5;
  minChar: number = 3;
  inputType: string = "checkbox";
  myClassName: string = "myColor";

  constructor() {
    this.courseName = 'Angular 20 Tutorial - Updated';
  }

  showWelcomeMessage() {
    alert('Welcome to Angular 20!');
  }

  changeCourseName() {
    this.courseName = 'ReactJs Tutorial';
  }

  onCityChange() {
    alert('City changed!');
  }
}
