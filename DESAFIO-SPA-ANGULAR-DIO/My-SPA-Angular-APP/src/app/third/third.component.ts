import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
declare: string = 'Eu declarei as rotas diferente do que mostrado no curso. Ao invés de declarar no app-routing-module,' 
+ 'eu declarei no app-component.html e funciona.';
}
