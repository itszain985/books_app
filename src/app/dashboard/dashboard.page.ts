import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public data = [
    {
      bookImg: '/assets/img/1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/4.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/5.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/6.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/7.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/10.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/11.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/12.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
  ];
  public data2 = [
    {
      bookImg: '/assets/img/b1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/b2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/b3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/b4.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/b5.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/b6.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/h1.jpg',
      bookName: 'EMILE ZOLA',
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/h2.jpg',
      bookName: 'FATHERHOOD',
      authName: 'Marcus Berkmann',
    },
    {
      bookImg: '/assets/img/h3.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
    {
      bookImg: '/assets/img/12.jpg',
      bookName: "TRAVELLER'S",
      authName: 'Michael Rosen',
    },
  ];
  constructor() {}

  ngOnInit() {}
  // isCenterSlide(index: number): boolean {
  //   const centerIndex = Math.floor(this.data.length / 2);
  //   return index === centerIndex;
  // }
}
