import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[] = [
    //     new Recipe('Test name',
    //     'test Description about the food',
    //     'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    //     [
    //         new Ingredient("banana",30),
    //         new Ingredient("milk (in litre)", 1),
    //         new Ingredient('sugar (in gram)',50)
    //     ],1),
    //     new Recipe('Test name 2',
    //     'Test Description of second item of the food',
    //     'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    //     [
    //         new Ingredient("banana",60),
    //         new Ingredient("milk (in litre)", 2),
    //         new Ingredient('sugar (in gram)',100)
    //     ],2)
    // ];
    private recipes: Recipe[] = [];
    setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    constructor(private shoppingListService : ShoppingListServices){}
    addIngredientToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
    getRecipeById(id:number){
        return this.recipes[id-1];
    }
      getRecipes(){
          return this.recipes.slice();
      }
      addRecipe(recipe : Recipe){
          recipe.id = this.recipes.length + 1;
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(id : number , newRecipe : Recipe){
          newRecipe.id = id;
          this.recipes[id-1] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(id : number){
          this.recipes.splice(id-1,1);
          this.recipesChanged.next(this.recipes.slice());

      }
}