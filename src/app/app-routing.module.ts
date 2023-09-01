import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'addrecipe',
    loadChildren: () =>
      import('./addrecipe/addrecipe.module').then((m) => m.AddrecipeModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./recipeslist/recipeslist.module').then(
        (m) => m.RecipeslistModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./shoppinglist/shoppinglist.module').then(
        (m) => m.ShoppinglistModule
      ),
  },
  {
    path: 'mods',
    loadChildren: () =>
      import('./weekplan/weekplan.module').then((m) => m.WeekplanModule),
  },
  //   { path: '', component: HomeComponent },
  //   { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
