import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AdditemComponent } from '../components/additem/additem.component';
import {Item} from '../models/item';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3001/items';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
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

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url)
   }

   AddItem(item:Item):Observable<Item>{
   // this.items.unshift(item);
   return this.http.post<Item>(this,url, item, this.httpOptions);

  }
}
