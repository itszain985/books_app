import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  public bookImages: any = [
    '/assets/img/ob1.png',
    '/assets/img/ob2.png',
    '/assets/img/ob3.png',
    '/assets/img/ob1.png',
    '/assets/img/ob2.png',
    '/assets/img/ob3.png',
  ];
  public bookContent = '';

  constructor() {}

  ngOnInit() {}
}
