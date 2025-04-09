import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { twoWay } from './two-way-bind/two.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,twoWay],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-two-way-binding';
}
