import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {
  quotes: Quote [] = [
    new Quote(1,'"IN THIS TEMPLE AS IN THE  HEARTS OF THE PEOPLE FOR WHOM HE SAVED THE UNION THE MEMORY OF ABRAHAM LINCOLN IS ENSHRINED FOREVER." ','Royal Cortissoz','Mark Muchiri Macharia','Directly behind the Lincoln statue you can read the words of Royal Cortissoz carved into the wall',),
    new Quote(2,'"The ultimate measure of a man is not where he stands in moments of convenience and comfort, but where he stands at times of challenge and controversy."','Martin Luther king Jr','Mark Muchiri Macharia','From his 1963 book, Strength to Love',),
    new Quote(3,'“I am not a saint, unless you think of a saint as a sinner who keeps on trying.”','Nelson Mandela','Mark Muchiri Macharia','Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999. He was the country\'\s first black head of state and the first elected in a fully representative democratic election.',),
    ];
   
   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

   deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

   constructor() { }
 
   ngOnInit() {
   }
 }