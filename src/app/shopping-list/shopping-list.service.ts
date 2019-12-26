import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListServices{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<Number>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('orange',10)
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }
    getIngredient(index : number){
        return this.ingredients[index];
    }
    editIngredient(ingredient : Ingredient,index : number){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index : number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}