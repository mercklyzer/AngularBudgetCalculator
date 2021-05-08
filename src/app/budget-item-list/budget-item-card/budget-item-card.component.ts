import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/project-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  // To allow parent to update data of this child
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() showModal: EventEmitter<any> = new EventEmitter<any>();


  constructor() { 
    this.item = {id: null!, description: '', amount: null!};
  }

  ngOnInit(): void {
  }

  onShowModal(){
    console.log("item clicked")
    this.showModal.emit();
  }

  onXButtonClick(){
    this.xButtonClick.emit();
  }

}
