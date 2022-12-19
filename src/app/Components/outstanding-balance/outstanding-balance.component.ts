import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-outstanding-balance',
  templateUrl: './outstanding-balance.component.html',
  styleUrls: ['./outstanding-balance.component.css']
})

export class OutstandingBalanceComponent implements OnInit {
  pageSize: number = 10;
  page: number = 1;
  total: number;
  pageSizes: number[] = [10,20,50]
 

  tableArray= [
    {row: "Data1", type: "Male", link: "Link1"},
    {row: "Data2", type: "Male", link: "Link2"},
    {row: "Data3", type: "Male", link: "Link3"},
    {row: "Data4", type: "Male", link: "Link4"},
    {row: "Data5", type: "Male", link: "Link5"},
    {row: "Data6", type: "Male", link: "Link6"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"},
    {row: "Data7", type: "Male", link: "Link7"}
   
  ]

  filteredData : {row: string, type: string, link: string}[];
  _filterText: string;
  constructor() { }

  get filterText(){
    return this._filterText;
  }

  set filterText(value: string){
    this._filterText = value;
    this.filteredData = this.filterByGender(value)
    this.total = this.filteredData.length
    
    
  }

  filterByGender(filterTerm: string){

    
    if(this.tableArray.length == 0 || filterTerm === ''){
      return this.tableArray
    }
    else{
      return this.tableArray.filter((obj)=>{
        
        return obj.type.toLowerCase().startsWith(filterTerm.toLowerCase())
      })
    }
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
  }

  ngOnInit(): void {
    this.filteredData = this.tableArray
  }

}
