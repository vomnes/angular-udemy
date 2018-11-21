import { Component, OnInit } from '@angular/core';

import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipe-book/recipe-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  currentTab = 'recipes';

  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService) {}

  updateTab(tabName: string) {
    this.currentTab = tabName;
  }

  ngOnInit() {
    this.dataStorageService.getRecipes();
  }
}
