import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]  }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes),
  ],
  exports: [RouterModule],
})
export class RecipesRoutingModule {

}
