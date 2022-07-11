import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {
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

}
