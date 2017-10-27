import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadProdutoPage } from './cad-produto';

@NgModule({
  declarations: [
    CadProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadProdutoPage),
  ],
})
export class CadProdutoPageModule {}
