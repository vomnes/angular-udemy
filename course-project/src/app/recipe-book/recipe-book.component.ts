import { Component, OnInit } from '@angular/core';

import { RecipeBook } from './recipe-book.model';
import { RecipeService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeBook = this.recipeService.getRecipes()[0];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: RecipeBook) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
