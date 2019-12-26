import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  private igchangedSub : Subscription;
  constructor( private shoppinglistService :ShoppingListServices) {}

  ngOnDestroy() : void {
    this.igchangedSub.unsubscribe();
  }
  editItem(index : Number){
    this.shoppinglistService.startedEditing.next(index);
  }
  ngOnInit() {
    this.ingredients=this.shoppinglistService.getIngredients();
    this.igchangedSub = this.shoppinglistService.ingredientsChanged
    .subscribe(
      (newingredients: Ingredient[])=>{
        this.ingredients = newingredients;
      }
    );
  }
}
