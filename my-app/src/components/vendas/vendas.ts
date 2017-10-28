import { Component } from '@angular/core';

@Component({
  selector: 'vendas',
  templateUrl: 'vendas.html'
})
export class VendasComponent {

  text: string;

  constructor() {
    console.log('Hello VendasComponent Component');
    this.text = 'Hello World';
  }

}
