import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailRecipe : Recipe;
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }
  dropdownState : boolean = false;
  changedropdownState(){
  this.dropdownState = !this.dropdownState;
  console.log("working click");
  console.log(this.dropdownState);
  }
  onAddToShoppingList(){
this.recipeService.addIngredientToShoppingList(this.detailRecipe.ingredients);
  }

}
