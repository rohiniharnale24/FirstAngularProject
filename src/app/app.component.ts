import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myFirstApp';
  skills: Array<string> = ['html', 'css', 'js', 'angular'];
}
