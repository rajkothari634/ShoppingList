import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailRecipe : Recipe;
  constructor(private recipeService : RecipeService,private route: ActivatedRoute,private router : Router) { }
  id : number;
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (param : Params) => {
        this.id = this.route.snapshot.params['id'];
        this.detailRecipe = this.recipeService.getRecipeById(this.id);
      }
    );
    this.detailRecipe = this.recipeService.getRecipeById(this.id);
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
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
