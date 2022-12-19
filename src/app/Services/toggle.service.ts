import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  
  isModalOpen = false
  isCashResponse = false
  isUploadResponse = false
  isLoading = false
  showNav = false
}
