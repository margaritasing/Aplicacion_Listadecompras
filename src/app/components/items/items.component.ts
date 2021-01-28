import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { from } from 'rxjs';
import { Item } from '../../models/item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    //this.items = [];
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    })
    this.getTotal();

  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }


  toggleItem(item:Item){
    this.getTotal();

  }

  getTotal(){
    this.total = this.items
                .filter( item => !item.completed)
                .map(item => item.quantity * item.price)
                .reduce( (acc, item) => acc += item, 0 );

                console.log(this.total);

  }

}
