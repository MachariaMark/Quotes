import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: object[];
  quoteName: string;
  quoteAuthor:string;
  showDescription:string;

  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
    this.quoteName = '';
    this.quoteAuthor = '';
    this.showDescription = '';
    this.quotes = [
      {
        'id': 1,
        'name':'"IN THIS TEMPLE AS IN THE HEARTS OF THE PEOPLE FOR WHOM HE SAVED THE UNION THE MEMORY OF ABRAHAM LINCOLN IS ENSHRINED FOREVER."',
        'author':'Royal Cortissoz',
        'description': 'Directly behind the Lincoln statue you can read the words of Royal Cortissoz carved into the wall',
      },
      {
        'id':2,
        'name':'"The ultimate measure of a man is not where he stands in moments of convenience and comfort, but where he stands at times of challenge and controversy."',
        'author':'Martin Luther king Jr',
        'description': 'From his 1963 book, Strength to Love',
      },
      {
        'id':3,
        'name':'“I am not a saint, unless you think of a saint as a sinner who keeps on trying.”',
        'author':'Nelson Mandela',
        'description': 'Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999. He was the country\'\s first black head of state and the first elected in a fully representative democratic election.',
      },
    ];
  }

}
