import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AdditemComponent } from '../components/additem/additem.component';
import {Item} from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] =[{
    id : 0,
    title : 'manzana',
    price : 10.5,
    quantity : 4,
    completed : false

  },
  {
    id : 1,
    title : 'pan',
    price : 3.5,
    quantity : 8,
    completed : true

  },
  {
    id : 2,
    title : 'chamarra',
    price : 300,
    quantity : 8,
    completed : false
  },

];

  constructor() { }

  getItems(){

    return this.items;

   }

   AddItem(item:Item){
    this.items.unshift(item);

  }
}
