import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { RecipeService } from '../recipe-book/recipe-book.service';
import { RecipeBook } from '../recipe-book/recipe-book.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      'https://udemy-angular-recipebook-7aa39.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.http.get(
      'https://udemy-angular-recipebook-7aa39.firebaseio.com/recipes.json',
    )
    .map(
      (response: Response) => {
        const recipes: RecipeBook[] = response.json();
        recipes.forEach((recipe) => {
          if (!recipe.ingredients) {
            console.log(recipe);
            recipe.ingredients = [];
          }
        });
        return recipes;
      }
    )
    .subscribe(
      (recipes: RecipeBook[]) => {
        this.recipeService.initRecipes(recipes);
      }
    )
  }
}
