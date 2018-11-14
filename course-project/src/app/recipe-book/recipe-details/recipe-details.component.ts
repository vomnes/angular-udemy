import { Component, OnInit, Input } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: RecipeBook;

  constructor() { }

  ngOnInit() {
  }

}
