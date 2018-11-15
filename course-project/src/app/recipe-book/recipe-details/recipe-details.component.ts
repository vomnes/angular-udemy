import { Component, OnInit, Input } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: RecipeBook;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  goToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
