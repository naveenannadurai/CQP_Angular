import { Component, AfterViewInit, ViewChildren, OnInit, ElementRef } from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { HomeDialogComponent } from './home.dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DownloadService } from "../service/download.service";
import { saveAs } from 'file-saver';

//import { jsonpFactory } from '@angular/http/src/http_module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AlertService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private alertService: AlertService,
    public dialog: MatDialog) { }
  private inbox: any;
  public vouchers = new Array();
  public users: any;
  public callIn = new Array();
  public tpl = new Array();
  public tplDue = new Array();
  public user = new Array();
  public data: any;
  ngOnInit() {
    this.getinbox();
    this.getAlerts();
  }
  vouchertbl: boolean = true;
  callintbl: boolean = true;
  tpltbl: boolean = true;
  usertbl: boolean = true;
  vouchercosttbl: boolean = true;
  show($event) {
    switch ($event.target.getAttribute('name')) {
      case 'vouchertbl': {
        this.vouchertbl = !this.vouchertbl
        this.showHide(this.vouchertbl, $event)
        break;
      }
      case 'callintbl': {
        this.callintbl = !this.callintbl
        this.showHide(this.callintbl, $event)
        break;
      }
      case 'tpltbl': {
        this.tpltbl = !this.tpltbl
        this.showHide(this.tpltbl, $event)
        break;
      }
      case 'usertbl': {
        this.usertbl = !this.usertbl
        this.showHide(this.usertbl, $event)
        break;
      }
      case 'vouchercosttbl': {
        this.vouchercosttbl = !this.vouchercosttbl
        this.showHide(this.vouchercosttbl, $event)
        break;
      }
    }
  }
  showHide(tblFlag, $event) {
    console.log($event.target.setAttribute)
    if (tblFlag) {
      $event.target.setAttribute("src", "../../assets/hide.gif");
      $event.target.setAttribute("title", "hide");
    } else {
      $event.target.setAttribute("src", "../../assets/show.gif");
      $event.target.setAttribute("title", "show");
    }
  }

  export(fileName: string) {
    this.alertService.export(fileName).subscribe(
      blob => saveAs(blob, fileName + "-Sheet.xlsx")
    )
  }
  getinbox() {
    this.alertService.getinbox().subscribe(data => {
      this.inbox = data;
    })
  }
  getAlerts() {
    this.alertService.getAlerts().subscribe(
      data => {
        for (var d of data) {
          if (d.itemType == "Call-In") { this.callIn.push(d); }
          else if (d.itemType == "TPL") { this.tpl.push(d); }
          else if (d.itemType == "TPL-DUE") { this.tplDue.push(d); }
          else if (d.itemType == "User") { this.user.push(d); }
          else if (d.itemType == "Voucher") { this.vouchers.push(d); }

        }
      }

    )
  }
}
