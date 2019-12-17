import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor( private shoppinglistService :ShoppingListServices) {}

  ngOnInit() {
    this.ingredients=this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged
    .subscribe(
      (newingredients: Ingredient[])=>{
        this.ingredients = newingredients;
      }
    );
  }
}
