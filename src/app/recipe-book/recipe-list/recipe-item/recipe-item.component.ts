import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeBookService} from '../../recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeBookService.recipeSelected.emit(this.recipeItem);
  }

}
