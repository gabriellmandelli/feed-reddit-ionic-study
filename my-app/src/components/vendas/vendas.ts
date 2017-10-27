import { Component } from '@angular/core';

/**
 * Generated class for the VendasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
