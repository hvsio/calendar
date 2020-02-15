import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = ['DAY', 'WEEK', 'MONTH', '#TODOs', 'Stories'];
  activeTab = this.tabs[0];
  title = 'trial';

}
