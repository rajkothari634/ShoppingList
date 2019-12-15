import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() sendDetailOfRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test name',
    'test Description about the food',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60'
    ),
    new Recipe('Test name 2',
    'Test Description of second item of the food',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60')
  ];
  constructor() { }
  fillDetail(recipe : Recipe){
    console.log("ready to send Detail by senddetailofrecipe");
    this.sendDetailOfRecipe.emit(recipe);
  }
  ngOnInit() {
  }

}
