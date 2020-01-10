import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {RecipeBookService} from './recipe-book/recipe-book.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [RecipeBookService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
