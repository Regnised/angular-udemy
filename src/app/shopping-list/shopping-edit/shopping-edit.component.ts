import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addShoppingEl = new EventEmitter<{name: string, amount: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(name: HTMLInputElement, amount: HTMLInputElement) {
    this.addShoppingEl.emit({name: name.value, amount: amount.value});
  }

}
