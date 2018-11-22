import { Component } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipe-book/recipe-book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => { //: HttpEvent<Object> -> events
          console.log(response); // HttpEventType.xxx -> Response/Sent
        }
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
