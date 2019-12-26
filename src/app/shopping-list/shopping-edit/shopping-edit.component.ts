import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm : NgForm;
  edittingSubscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;
  constructor(private slService : ShoppingListServices) { }
  ngOnInit() {
    this.edittingSubscription = this.slService.startedEditing.subscribe(
      (index : number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        });
      }
     );
  }
  ngOnDestroy(){
    this.edittingSubscription.unsubscribe();
  }
  onCancel(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slForm.reset();
    this.slService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
  }
  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(!this.editMode){
      this.slService.addIngredient(newIngredient);
    }else{
      this.slService.editIngredient(newIngredient,this.editedItemIndex);
      this.editMode = false;
      this.slForm.setValue({
        name : '',
        amount : null
      });
    }
  }

}
