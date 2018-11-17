import { EventEmitter } from '@angular/core';

import { RecipeBook } from './recipe-book.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeBook>();

  private recipes: RecipeBook[] = [
    new RecipeBook(
      'A test',
      'This is a test',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new RecipeBook(
      'B test',
      'This is B test',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Beef', 2)
      ]
    )
  ];

  getRecipes() {
    if (this.recipes) {
      return this.recipes.slice(); // Return a copy not the address
    }
  }

  getRecipeByIndex(id: number) {
    if (this.recipes && id >= 0 && id <= (this.recipes.length - 1)) {
      return this.recipes[id]; // Return a copy not the address
    }
    return null
  }
}
