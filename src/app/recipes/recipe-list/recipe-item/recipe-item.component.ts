import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;

  //constructor(private recipeService: RecipeService) { }
  constructor(private router: Router,
              private route: ActivatedRoute){}
  ngOnInit() { 
  }
  // showDetail(id: number){
  //   console.log(id);
  //   // console.log("detail emitter in recipe item click is working");
  //   // this.recipeService.recipeSelected.emit(this.recipe);
  //   this.router.navigate([id],{relativeTo: this.route});
  // }
}
