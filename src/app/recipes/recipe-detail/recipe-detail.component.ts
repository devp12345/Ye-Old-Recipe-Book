import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() id: number
recipe:Recipe;
  constructor(private recipeService: RecipeService, 
    private shoppingService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
this.route.params.subscribe(
  (params: Params) => {
    this.id = +params['id']
    this.recipe = this.recipeService.getRecipe(this.id)
  }
)


  }

  onAddToShoppingList(){
//this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
this.shoppingService.addToList(this.recipe.ingredients);
  }

  onEditRecipe(){
this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
