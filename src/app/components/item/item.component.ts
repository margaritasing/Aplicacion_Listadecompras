import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';
import {ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item:Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();


  /*aqui cada vez que se caiga la suma y la resta de los item
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();*/

  constructor(private itemService:ItemService) { }


  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      item: true,
      'completed': this.item.completed
    };

    return classes;
  }

  onToggle(item){
    item.completed = !item.completed;
    /* this.itemService.toggleCompleted(item).subscribe(item => {
          }); */
    this.toggleItem.emit(item);
  }

  onDelete(item){
    this.deleteItem.emit(item);
  }

}
