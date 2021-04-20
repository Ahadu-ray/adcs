import {Injectable} from '@angular/core';
import {IndividualConfig, ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  options: IndividualConfig;

  constructor(
    private toasterService: ToastrService
  ) {
    this.options = this.toasterService.toastrConfig;
    this.options.positionClass = 'toast-top-right';
    this.options.timeOut = 4000;
  }

  success(message, title) {
    console.log(message)
    this.toasterService.success(message, title, this.options);
  }

  error(message, title) {
    this.toasterService.error(message, title, this.options);
  }
  info(message, title) {
    this.toasterService.info(message, title, this.options);
  }

  warning(message, title) {
    this.toasterService.warning(message, title, this.options);
  }
}
