import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/Services/toggle.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(public toggleServices: ToggleService) { }

  ngOnInit(): void {
  }

  onAdisSubmit(){
    this.toggleServices.isModalOpen = true
  }
}
