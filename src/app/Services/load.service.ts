import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from '../Model/customer';

const URI = `http://localhost:8000`

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(private http: HttpClient) { }

  getAllCustomers(){
    return this.http.get<Customer[]>(URI + `/getAllCustomers`);
  }

}
