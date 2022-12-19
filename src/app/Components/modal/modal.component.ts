import { Component, OnInit } from '@angular/core';
import { CashService } from 'src/app/Services/cash.service';
import { ToggleService } from 'src/app/Services/toggle.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public toggleServices: ToggleService, public cashServices: CashService) { }

  ngOnInit(): void {
  }

  onCloseModal(){
    this.toggleServices.isModalOpen = false
  }

}
