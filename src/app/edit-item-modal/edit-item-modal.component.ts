import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { BudgetItem } from 'src/shared/models/project-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  @Input() isShowModal:boolean;
  @Input() item:BudgetItem = new BudgetItem(null!, '', null!);
  @Output() editItem:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { 
    this.isShowModal = false;
  }

  ngOnInit(): void {
  }

  onEditItem(item:BudgetItem){
    this.editItem.emit(item)
    console.log("from modal")
  }

}
