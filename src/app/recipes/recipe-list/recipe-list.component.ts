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
    'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiK6ZqHnanmAhXcyjgGHajvBioQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw0Ts4sWi4lKHGt4mC2qhtrt&ust=1576003590427231'
    ),
    new Recipe('Test name 2',
    'Test Description of second item of the food',
    'link of the image')
  ];
  constructor() { }
  fillDetail(recipe : Recipe){
    console.log("ready to send Detail by senddetailofrecipe");
    this.sendDetailOfRecipe.emit(recipe);
  }
  ngOnInit() {
  }

}
