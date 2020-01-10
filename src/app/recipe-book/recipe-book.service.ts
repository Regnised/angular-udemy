import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from '../shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Schnitzel with meat',
      'https://lh3.googleusercontent.com/RptKpq5EhLufjqvjg-F4SvR1wLsm7DIe-xqNf9yVBG3s9aNcgx0jHqu6_xsfnBO7tSRYSEvCiupSAFtsPFdj=s343-c-rj-v1-e365',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ],
    ),
    new Recipe(
      'Big Fat Burger',
      'Description of Big Fat Burger',
      'https://lh3.googleusercontent.com/ggm8aVA_aBp44sUUG7JRtFfjC3ZssnNCY3FCPWpsyUaZqd4T89zbDBXwVhn0PtO9ywkMYVbsqnibgn5P9RLhwIo=s343-c-rj-v1-e365',
      [
        new Ingredient('Buns ', 2),
        new Ingredient('Meat', 2),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(0);
  }
}
