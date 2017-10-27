import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadClientePage } from './cad-cliente';

@NgModule({
  declarations: [
    CadClientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadClientePage),
  ],
})
export class CadClientePageModule {}
