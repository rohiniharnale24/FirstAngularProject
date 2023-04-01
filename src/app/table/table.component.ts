import { Component, OnInit } from '@angular/core';
// let array = [
//   {
//     fname: 'rohini',
//     lname: 'harnale',
//     email: 'rohini@gmail.com',
//   },
//   {
//     fname: 'varsha',
//     lname: 'mahajan',
//     email: 'varsha@gmail.com',
//   },
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class tableComponent implements OnInit {
  fname: string = 'ROHINI';
  lname: string = 'HARNALE';
  email: string = 'rohini@gmail.com';
  id: number = 123;
  isDisable: boolean = true;

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }
}
