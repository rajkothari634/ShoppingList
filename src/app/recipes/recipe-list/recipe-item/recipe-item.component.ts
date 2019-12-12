import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
 @Output() detailEmitter = new EventEmitter<void>();
  constructor() { }
  ngOnInit() {
  }
  showDetail(){
    console.log("detail emitter in recipe item click is working");
    this.detailEmitter.emit();
  }
}
