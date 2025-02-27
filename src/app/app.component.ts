import { Component } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
  selector: 'app-root',
  imports: [TodoFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shape-shift';
}
