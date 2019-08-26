import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthenticationGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



ShoppingModule
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'   },
  {path: 'shopping-list', component: ShoppingListComponent  },
    ];
    
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
],
exports:[
    RouterModule
]
})
export class AppRoutingModule {}