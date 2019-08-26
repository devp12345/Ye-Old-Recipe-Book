import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, NgModel, Form } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('form', {static: false}) slForm: NgForm
subscription: Subscription;
editMode = false;
edittedItemIndex: number;
edittedItem: Ingredient;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditting.subscribe( (index: number)=>{
      this.editMode = true;
      this.edittedItemIndex = index;
      this.edittedItem = this.shoppingService.getIngredient(index)
      this.slForm.setValue({
        ingName: this.edittedItem.name,
        ingAmount: this.edittedItem.amount

      });


    });
  }

  ngOnDestroy(){
this.subscription.unsubscribe();
}
    onSubmit(form: NgForm){
    const value = form.value;
  const newIngredient = new Ingredient(value.ingName,value.ingAmount)
  if(this.editMode){
  this.shoppingService.updateIngredient(this.edittedItemIndex, newIngredient)
  this.editMode=false
  }else{
  this.shoppingService.addIngredient(newIngredient);
  }
  form.reset()

  }

  onClear(){
    this.slForm.reset()
    this.editMode = false
  }


  onDelete(){
    this.shoppingService.removeIngredient(this.edittedItemIndex)
this.onClear()

  }

}



