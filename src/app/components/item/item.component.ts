import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();


  /*aqui cada vez que se caiga la suma y la resta de los item
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();*/


  constructor() { }

  ngOnInit() {
  }

  onDelete(item: Item){
    this.deleteItem.emit(item)
  };

  onToggle(item: Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);


  };

}
