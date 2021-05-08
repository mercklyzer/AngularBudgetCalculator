import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { BudgetItem } from 'src/shared/models/project-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() showModal: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();


  constructor() { }

  ngOnInit(): void {
  }

  onShowModal(item: BudgetItem){
    console.log("item in list", item)
    this.showModal.emit(item)
  }

  onDelete(item: BudgetItem){
    this.delete.emit(item)
  }

}
