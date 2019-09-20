import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'The Quote for today is';
  Quotes = '"IN THIS TEMPLE AS IN THE HEARTS OF THE PEOPLE FOR WHOM HE SAVED THE UNION THE MEMORY OF ABRAHAM LINCOLN IS ENSHRINED FOREVER."';
  Author = 'Royal Cortissoz'
}
