import { EventEmitter } from '@angular/core';

import { RecipeBook } from './recipe-book.model';

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeBook>();

  private recipes: RecipeBook[] = [
    new RecipeBook(
      'A test',
      'This is a test',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
    ),
    new RecipeBook(
      'B test',
      'This is B test',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
    )
  ];

  getRecipes() {
    if (this.recipes) {
      return this.recipes.slice(); // Return a copy not the address
    }
  }
}
