import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService{
    


ingredientChanged = new Subject<Ingredient[]>(); 
startedEditting = new Subject<number>(); 
    private ingredients: Ingredient [] = [
        new Ingredient('bananas (overripe)',5), 
        new Ingredient('sugar',2) 
      ];
    
     getIngredients(){
         return this.ingredients.slice();
     }

     
     getIngredient(index: number){
        return this.ingredients[index];
    }

addIngredient(ingredient: Ingredient){
this.ingredients.push(ingredient);
this.ingredientChanged.next(this.ingredients.slice());
}

addToList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
    }

addIngredients(ingredients: Ingredient[]){
  //  for(let ingredient of ingredients){
   //     this.addIngredient(ingredient);
   //}
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
this.ingredients[index] = newIngredient;
this.ingredientChanged.next(this.ingredients.slice());
    }

    removeIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    replaceIngredients(ingredients: Ingredient[]){
        this.ingredients = ingredients;
        this.ingredientChanged.next(this.ingredients.slice());
    }
    }
