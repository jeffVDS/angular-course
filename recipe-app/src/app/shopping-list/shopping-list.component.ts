import { Component, OnChanges, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientList();
    console.log(this.shoppingListService.getIngredientList())
    this.shoppingListService.ingredientListChange.subscribe(
      () => {
        this.ingredients = this.shoppingListService.getIngredientList();
      }
    );
  }


}
