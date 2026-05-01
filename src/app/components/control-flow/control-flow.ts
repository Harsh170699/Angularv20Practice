import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible: boolean = true;

  startMonthName: string = 'Feb';

  cityList: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

  studentList: any[] = [
    {name: 'John', city: 'Pune', isActive: true},
    {name: 'Jane', city: 'Mumbai', isActive: false},
    {name: 'Bob', city: 'Bangalore', isActive: true},
    {name: 'Alice', city: 'Hyderabad', isActive: false},
    {name: 'Charlie', city: 'Chennai', isActive: true}
  ]

  showP() {
    this.isParaVisible = true;
  }

  hideP() {
    this.isParaVisible = false;
  }
}
