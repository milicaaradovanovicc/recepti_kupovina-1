import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRecipeComponent } from './addrecipe/new-recipe/new-recipe.component';
import { IngredientComponent } from './addrecipe/ingredient/ingredient.component';

@NgModule({
  declarations: [AppComponent, NewRecipeComponent, IngredientComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
