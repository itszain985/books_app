import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  book: any; // To hold the selected book data

  constructor(private router: Router) {
    // Retrieve the passed book data
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.book = navigation.extras.state['book'];
    }
  }
  ngOnInit() {}

}
