import { Component } from '@angular/core';
import { ToggleService } from './Services/toggle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cash-load-webportal';
  constructor(public toggleServices: ToggleService){}

}
