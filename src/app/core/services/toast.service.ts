import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }
  showSuccess(title: any, message: any) {
    this.toastr.success(message, title, {
      timeOut: 8000
    });
  }
  showError(title: any, message: any) {
    this.toastr.error(message, title, {
      timeOut: 12000
    });
  }

}
