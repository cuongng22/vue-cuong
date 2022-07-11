import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-bai05-evenbinding',
  templateUrl: './bai05-evenbinding.component.html',
  styleUrls: ['./bai05-evenbinding.component.css']
})
export class Bai05EvenbindingComponent implements OnInit {
  products: Product[] = [
    {
      id: 1, name: 'cuong'
    },
    {
      id: 2, name: 'quang'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  function() {
    alert('yeah!');
  }
  change() {
    alert('you are crazy man!!');
  }


}
