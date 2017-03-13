import { IBook } from './IBook';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent implements OnInit {

  private _book: IBook = {
    title: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numberPage: 314,
    price: 44.99,
    dateRelease: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  constructor() { }

  ngOnInit() {
  }
  get book(): IBook {
    return this._book;
  }

}
