import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  div1ClassName = signal<string>('');

  isDiv2Green: boolean = false;

  firstName: string = 'Harsh';
  courseName: string = 'Angular 20 Practice';

  rollNoList = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  studentObj: any = {
    name: 'Harsh',
    city: 'Pune',
    state: 'Gujarat'
  }

  currentDate: Date = new Date();

  constructor() {
    console.log('AttDirective constructor');
  }

  ngOnInit(): void {
    console.log('AttDirective ngOnInit');
    // To Trigger API calls
    // To subscribe to observables
  }
  
  ngAfterContentInit(): void {
    console.log('AttDirective ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('AttDirective ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('AttDirective ngAfterViewInit');
    // To access DOM elements
    // To initialize Child components
  }
  
  ngAfterViewChecked(): void {
    console.log('AttDirective ngAfterViewChecked');
  }
  
  ngOnDestroy(): void {
    console.log('AttDirective ngOnDestroy');
    // To cleanup resources
    // To unsubscribe from observables
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }
  
  toggleDiv2Green() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}
