import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.page.html',
  styleUrls: ['./search-book.page.scss'],
})
export class SearchBookPage implements OnInit {

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
  constructor(private router: Router) { }

  // ngOnInit() {
  // }

  
  static_data:any = [
    {
      title:"book one",
      image_url:"/assets/img/1.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book two",
      image_url:"/assets/img/2.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book three",
      // image_url:"data:image/jpeg;base64,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",
      image_url:'/assets/img/3.jpg',
      description:"description of allama iqbal book"
    },
    {
      title:"book four",
      image_url:"/assets/img/4.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book five",
      image_url:"/assets/img/5.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book six",
      image_url:"/assets/img/6.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book seven",
      image_url:"/assets/img/7.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book eight",
      image_url:"/assets/img/12.jpg",
      description:"description of allama iqbal book"
    },
    {
      title:"book nine",
      image_url:"/assets/img/10.jpg",
      description:"description of allama iqbal book"
    },
    
  ]

  searchTerm: string = '';  
  filteredBooks = [...this.static_data];  

  //  constructor(private router: Router) {}
  ngOnInit() {
    // Initially show all books
    this.filteredBooks = this.static_data;
  }

  filterBooks(event: any) {
    console.log('fun call-->',event)
    const searchValue = event.target.value?.toLowerCase() || ''; 
    this.filteredBooks = this.static_data.filter((book:any) =>

      book.title.toLowerCase().includes(searchValue)  
    );
  }

  clickFn(index:any){
    console.log('click fn is working',index);
    const selectedBook = this.filteredBooks[index];
    this.router.navigate(['/book-details'], { state: { book: selectedBook } }); // Pass selected book data
  }
}
