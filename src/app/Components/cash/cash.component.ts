import { Component, OnInit } from '@angular/core';
import { CashService } from 'src/app/Services/cash.service';
import { ToggleService } from 'src/app/Services/toggle.service';


@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

  constructor(public toggleServices: ToggleService, private cashServices: CashService) { }

  ngOnInit(): void {
  }
  notes2000 = ""
  notes500 = ""
  notes200 = ""
  notes100 =""
  notes50 = ""
  notes10: string = "";
  totalNotes: number = 0

  value2000: number = 0
  value500: number = 0
  value200: number = 0
  value100: number = 0
  value50: number = 0
  value10: number = 0
  totalValue: number = 0
  
  ngDoCheck(){
    this.value2000 = Number(this.notes2000) * 2000
    this.value500 = Number(this.notes500) * 500
    this.value200 = Number(this.notes200) * 200
    this.value100 = Number(this.notes100) * 100
    this.value50 = Number(this.notes50) * 50
    this.value10 = Number(this.notes10) * 10
    this.totalNotes = Number(this.notes2000 + this.notes500 + this.notes200 + this.notes100 + this.notes50 + this.notes10)
    this.totalValue = Number(this.value2000 + this.value500 +this.value200 + this.value100 + this.value50 + this.value10)
  }

  onCashSubmit(){
    this.toggleServices.isModalOpen = true
    this.cashServices.cashData.totalNotes = this.totalNotes;
    this.cashServices.cashData.totalValue = this.totalValue;
  }
  
}
