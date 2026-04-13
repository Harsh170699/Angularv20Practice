import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
})
export class SignalExample {
  // normal variable
  firstName: string = 'harsh';

  // signal
  courseName = signal<string>('Angular');

  courseDuration = signal("15 videos")

  // Computed Signal: A computed signal is a signal that is derived from other signals.
  // It automatically updates when any of the signals it depends on change.
  // Computed Signal value cannot be directly set, it is derived from other signals.
  courseDetails = computed(() => {
    return this.courseName() + " - " + this.courseDuration()
  })

  constructor() {
    this.firstName = 'John';
    console.log('First name changed to:', this.firstName);

    // update signal
    // Signals are getter functions - calling them reads their value.
    console.log('Course name before update:', this.courseName());
    this.courseName.set("React");
    console.log('Course name after update:', this.courseName());
  }
}
