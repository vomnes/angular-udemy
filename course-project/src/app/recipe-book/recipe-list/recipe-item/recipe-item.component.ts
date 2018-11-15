import { Component, OnInit, Input } from '@angular/core';

import { RecipeBook } from '../../recipe-book.model';
import { RecipeService } from '../../recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item: RecipeBook;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe(data: RecipeBook) {
    this.recipeService.recipeSelected.emit(this.item);
  }
}
