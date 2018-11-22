import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { RecipeService } from '../recipe-book/recipe-book.service';
import { RecipeBook } from '../recipe-book/recipe-book.model';

@Injectable()
export class DataStorageService {
  token = 'myToken';

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer myToken');
    // return this.httpClient.put(
    //   'https://udemy-angular-recipebook-7aa39.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params: new HttpParams().set('test-auth', this.token),
    //     // headers: headers,
    //   },
    // );
    const req = new HttpRequest(
      'PUT',
      'https://udemy-angular-recipebook-7aa39.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        // reportProgress: true,
        // params: new HttpParams().
        //   set('test-auth', this.token),
      },
    )
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<RecipeBook[]>('https://udemy-angular-recipebook-7aa39.firebaseio.com/recipes.json')
    this.httpClient
    .get<RecipeBook[]>(
      'https://udemy-angular-recipebook-7aa39.firebaseio.com/recipes.json',
      {
        observe: 'body', // reponse, body
        responseType: 'json', // default: json
        // params: new HttpParams().set('test-auth', this.token),
      },
    )
    .map(
      (recipes) => {
        recipes.forEach((recipe) => {
          if (!recipe.ingredients) {
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
