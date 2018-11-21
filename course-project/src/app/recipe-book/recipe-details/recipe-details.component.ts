import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeBook } from '../recipe-book.model';
import { RecipeService } from '../recipe-book.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeBook;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (queryParams: Params) => {
          this.id = +queryParams['id'];
          if (isNaN(this.id)) {
            this.router.navigate(['/recipes']);
          }
          this.recipe = this.recipeService.getRecipeByIndex(this.id);
          if (!this.recipe) {
            this.router.navigate(['/recipes']);
          }
        }
      );
  }

  goToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
  }

}
