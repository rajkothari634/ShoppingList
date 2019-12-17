import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test name',
        'test Description about the food',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60'
        ),
        new Recipe('Test name 2',
        'Test Description of second item of the food',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}