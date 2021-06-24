import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: []
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('measurementInput', { static: false }) measurementInputRef: ElementRef;

  public measurementList = ['g','kg','oz','un','cup','spoon'];

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingMeasurement = this.measurementInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingMeasurement);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
