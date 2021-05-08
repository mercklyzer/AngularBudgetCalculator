import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/project-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // initiate an array of Budget Item
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  total: number;
  isShowModal: boolean;
  itemOnQueue: BudgetItem = null!

  constructor() { 
    this.total = 0;
    this.isShowModal = false;
  }

  ngOnInit(): void {
  }

  // add the new item to the array
  addItem(newItem: BudgetItem){
    if(newItem.amount != 0){
      console.log(newItem)
      this.budgetItems.push(newItem);
      this.updateTotal(newItem.amount)
    }
  }

  editItem(editItem:BudgetItem){
    let id:number = editItem.id;
    let index:number = 0;
    let item:BudgetItem;

    // find the item
    for(let i = 0; i < this.budgetItems.length; i++){
      item = this.budgetItems[i]
      if(item.id === id){
        index = i;
        break;
      }
    }
    // update item and total amount
    let oldAmount = this.budgetItems[index].amount;
    this.total = this.total - oldAmount + editItem.amount;
    this.budgetItems[index] = editItem;

    this.isShowModal = false;
  }

  // show modal
  showModal(item: BudgetItem){
    this.isShowModal = true
    this.itemOnQueue = item
  }


  // delete item
  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)

    this.updateTotal(-item.amount)
  }

  updateTotal(amount: number){
    this.total+=amount;
  }

}
