import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test name',
        'test Description about the food',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60'
        ,
        [
            new Ingredient("banana",30),
            new Ingredient("milk (in litre)", 1),
            new Ingredient('sugar (in gram)',50)
        ]),
        new Recipe('Test name 2',
        'Test Description of second item of the food',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60'
        ,
        [
            new Ingredient("banana",60),
            new Ingredient("milk (in litre)", 2),
            new Ingredient('sugar (in gram)',100)
        ])
    ];
    constructor(private shoppingListService : ShoppingListServices){}
    addIngredientToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
      getRecipes(){
          return this.recipes.slice();
      }
}