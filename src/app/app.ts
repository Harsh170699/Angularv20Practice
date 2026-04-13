import { Component, signal } from '@angular/core';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';

@Component({
  selector: 'app-root',
  imports: [Admin, User, DataBinding, SignalExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularv20Practice');
}
