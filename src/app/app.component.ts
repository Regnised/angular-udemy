import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  isSecret = true;
  logs = [];

  displaySecret() {
    this.isSecret = !this.isSecret;
    this.logs.push(`${new Date().toDateString()}`);
  }

  getColor() {
    return this.logs.length > 5 ? 'blue' : 'transparent';
  }
}
