import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('TEst 1', 'Description 1', 'https://lh3.googleusercontent.com/RptKpq5EhLufjqvjg-F4SvR1wLsm7DIe-xqNf9yVBG3s9aNcgx0jHqu6_xsfnBO7tSRYSEvCiupSAFtsPFdj=s343-c-rj-v1-e365'),
    new Recipe('TEst 2', 'Description 2', 'https://lh3.googleusercontent.com/ggm8aVA_aBp44sUUG7JRtFfjC3ZssnNCY3FCPWpsyUaZqd4T89zbDBXwVhn0PtO9ywkMYVbsqnibgn5P9RLhwIo=s343-c-rj-v1-e365')
  ];

  getRecipes() {
    return this.recipes.splice(0);
  }

}
