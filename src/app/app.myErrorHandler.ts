import { ErrorHandler, Injectable } from "@angular/core";
import { AlertService } from './service/alert.service';

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(private alertService:AlertService) {}
  private inbox: any;
    handleError(error) {
      this.alertService.sendErrorLog(error.message,window.location.toString()).subscribe(
        data => console.log(data)
      );
    }
  }