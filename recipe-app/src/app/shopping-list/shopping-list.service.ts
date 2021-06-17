import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredientList: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  public ingredientListChange = new EventEmitter();

  constructor() { }

  getIngredientList(){
    return this.ingredientList.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredientList.push(ingredient);
    this.ingredientListChange.emit();
  }

}
