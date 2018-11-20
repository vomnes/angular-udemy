import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') itemform: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.itemform.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        }
      );
  }

  onSubmit() {
    const ingName = this.itemform.value.name;
    const ingAmount = this.itemform.value.amount;
    if (ingName !== null && ingName !== "" && ingAmount !== null && ingAmount !== "") {
      const newIngredient = new Ingredient(ingName, +ingAmount);
      if (this.editMode === false) {
        this.shoppingListService.addIngredient(newIngredient);
      } else {
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      }
    }
    this.itemform.reset();
    this.editMode = false;
  }

  onClear() {
    this.itemform.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
