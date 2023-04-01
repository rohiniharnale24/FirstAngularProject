import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class productComponent {
  fname: string = 'rohan';
  lName: string = 'harnale';
  id: number = 123;
  email: string = 'rohan@gmail.com';
}
