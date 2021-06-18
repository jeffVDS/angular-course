import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Turkey_Schnitzel_with_Spatzle_and_vegetables.JPG/640px-Turkey_Schnitzel_with_Spatzle_and_vegetables.JPG',
        [
          new Ingredient('Swine Steak', 200, 'g')
          ,new Ingredient('Wheat', 0.25, 'cup')
          ,new Ingredient('Breadcrumbs',0.25,'cup')
          ,new Ingredient('Eggs', 1, 'un')
          ,new Ingredient('Lemon', 0.5, 'un')
          ,new Ingredient('Salt',null, null)
          ,new Ingredient('Pepper', null, null)
          ,new Ingredient('Oil',1,'cup')
        ])

    ,new Recipe('A burger',
      'Great Burger!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/In-n-out_3x3_Burger.jpg/640px-In-n-out_3x3_Burger.jpg',
      [
        new Ingredient('Bread', 1, 'un')
        ,new Ingredient('Burger', 1, 'un')
        ,new Ingredient('Lettuce',1,'un')
        ,new Ingredient('Eggs', 1, 'un')
        ,new Ingredient('Tomato', 0.5, 'un')
        ,new Ingredient('Mayonaise',1, 'spoon')
      ])
  ];

  public recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
