import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/project-item.model';
import {MainPageComponent} from '../main-page/main-page.component';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem(1,'', null!);
  @Input() isNewItem:boolean = true;
  // item = {
  //   amount: 0,
  //   description: ''
  // }

  // to pass to the parent the event
  // EventEmitter is built-in
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() formEdit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();


  constructor() { 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.isNewItem){
      this.formSubmit.emit(form.value);
      this.item.id += 1
      form.reset();
    }
    else{
      this.formEdit.emit(form.value);
      console.log("save button triggered")
    }
  }
}
