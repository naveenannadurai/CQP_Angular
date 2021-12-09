import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-wrp-summary-edit',
  templateUrl: './wrp-summary-edit.component.html',
  styleUrls: ['./wrp-summary-edit.component.css']
})
export class WrpSummaryEditComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'MTC1' },
      { item_id: 2, item_text: 'MTC2' },
      { item_id: 3, item_text: 'MTC3' },
      { item_id: 4, item_text: 'MTC4' },
      { item_id: 5, item_text: 'MTC5' }
    ];
    this.selectedItems = [
      
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  
  assignMTC(){
    this.router.navigate(['/assign-mtc']);
  }
  
   setCriteria(){
    this.router.navigate(['/set-criteria']);
  }
  
   addUpdateImages(){
    this.router.navigate(['/add-update-images']);
  }
  

}
