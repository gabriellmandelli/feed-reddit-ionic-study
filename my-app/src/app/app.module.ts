import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CadFornecedorPage } from '../pages/cad-fornecedor/cad-fornecedor';
import { CadClientePage } from  '../pages/cad-cliente/cad-cliente';
import { CadProdutoPage } from '../pages/cad-produto/cad-produto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CadFornecedorPage,
    CadClientePage,
    CadProdutoPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CadFornecedorPage,
    CadClientePage,
    CadProdutoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
