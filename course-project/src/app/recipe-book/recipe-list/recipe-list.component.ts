import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<RecipeBook>();

  recipes: RecipeBook[] = [
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

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(data: RecipeBook) {
    this.recipeSelected.emit(data);
  }
}
