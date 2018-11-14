import { Component, OnInit } from '@angular/core';

import { RecipeBook } from './recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeBook = null;

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(data: RecipeBook) {
    this.selectedRecipe = data;
  }
}
