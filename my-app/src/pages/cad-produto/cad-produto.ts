import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cad-produto',
  templateUrl: 'cad-produto.html',
})

export class CadProdutoPage {
  dadosProduto: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private frmBuilder: FormBuilder){

    this.dadosProduto = this.frmBuilder.group({
      nome:['',Validators.required],
      quantidade:['',Validators.required],
      valorProduto:['',Validators.required],
      dataNascimento:['',Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadProdutoPage');
  }

  onSubmit(){

  }
}
