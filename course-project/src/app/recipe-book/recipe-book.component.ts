import { Component, OnInit } from '@angular/core';

import { RecipeBook } from './recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeBook = new RecipeBook(
        'B test',
        'This is B test',
        'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
      );

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(data: RecipeBook) {
    this.selectedRecipe = data;
  }
}
