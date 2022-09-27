import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/Services/toggle.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public toggleService: ToggleService) { }

  onNavToggle(){
    this.toggleService.showNav = !this.toggleService.showNav
  }

  ngOnInit(): void {
  }

}
