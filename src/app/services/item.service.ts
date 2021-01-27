import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(){
    return[
      {
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
  };
}
