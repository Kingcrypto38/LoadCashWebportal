import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/Services/load.service';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {

  constructor(private loadService: LoadService) { }

  customerNames: string[] = [];
  customerId: string[];

  ngOnInit(): void {

    this.loadService.getAllCustomers().subscribe({
      next: res=>{
        res.forEach(cust=>this.customerNames.push(cust.customerName))
      },
      error: err=>{
        console.log(err.error);
        
      }
    })
  }

}
