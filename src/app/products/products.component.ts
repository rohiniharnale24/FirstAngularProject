import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  // templateUrl: './products.component.html',
  template: `<p class="info">My name is {{ fname }} with id {{ id }}</p>`,
  // styleUrls: ['./products.component.scss'],
  styles: [
    `
      .info {
        padding: 10px;
        border: 2px solid blue;
        background-color: aqua;
        border-radius: 20px;
      }
    `,
  ],
})
export class productsComponents implements OnInit {
  fname: string = 'rohini';
  lName: string = 'harnale';
  id: number = 123;
  email: string = 'rohan@gmail.com';

  constructor() {}
  ngOnInit(): void {
    console.log('immidiately after component innitialize....');
  }
}
