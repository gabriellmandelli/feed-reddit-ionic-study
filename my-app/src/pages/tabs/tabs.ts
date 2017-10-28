import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CadFornecedorPage } from '../cad-fornecedor/cad-fornecedor';
import { CadClientePage } from '../cad-cliente/cad-cliente';
import { CadProdutoPage } from '../cad-produto/cad-produto';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CadFornecedorPage;
  tab5Root = CadClientePage;
  tab6Root = CadProdutoPage;
  constructor() {

  }
}
