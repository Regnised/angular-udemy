import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private readonly shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmitForm(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.addIngredient(new Ingredient(name.value, +amount.value));
  }
}
