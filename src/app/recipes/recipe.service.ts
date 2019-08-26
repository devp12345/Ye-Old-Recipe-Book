import { Recipe } from './recipe.model';
import { Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{

  recipeChanged = new Subject<Recipe[]>(); 
   private recipes: Recipe[] = [

        new Recipe('Banana Bread', 'Delicious tasting banaana bread', 'https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg',
         [
           new Ingredient('bananas (overripe)',5), new Ingredient('sugar',1)
          ]),

        new Recipe('Omlette', 'Delicious tasting breakfast', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cheeseomelette_80621_16x9.jpg', 
        [
          new Ingredient('eggs (brown)', 2), new Ingredient('nacho cheese (in grams)',5)]
        )
      
      ];
      constructor(private shoppingService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
    }

//addToList(ingredients: Ingredient[]){
//this.shoppingService.addIngredients(ingredients);
//}

addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipeChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe){
this.recipes[index] = newRecipe;
this.recipeChanged.next(this.recipes.slice());
}

deleteRecipe(index: number){
this.recipes.splice(index, 1);
this.recipeChanged.next(this.recipes.slice());
}

replaceRecipes(recipes: Recipe[]){
this.recipes = recipes;
this.recipeChanged.next(this.recipes.slice());
}

}
