import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shopping List
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    loadChildren: './recipe-book/recipes.module#RecipesModule',
    // canLoad: [AuthGuard],
  },
  {
    path: 'shopping',
    component: ShoppingListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
