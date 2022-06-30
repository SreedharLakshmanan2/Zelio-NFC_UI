import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Report Problem', url: '/folder/Report Problem', icon: 'warning' },
    { title: 'Quick start guide', url: '/folder/Quick start guide', icon: 'help-circle' },
    { title: 'Feedback', url: '/folder/Feedback', icon: 'chatbox-ellipses' },
    { title: 'About', url: '/folder/About', icon: 'information-circle' },
    { title: 'Logout', url: '/folder/Logout', icon: 'log-out' },
  ];
  constructor() {}
}
