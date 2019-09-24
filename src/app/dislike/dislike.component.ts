import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-dislike',
 templateUrl: './dislike.component.html',
 styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {

  numberoflikes : number=0
  dislikebuttonclick(){
  this.numberoflikes++;
  }
  
  constructor() { }

  ngOnInit() {
  }
}
