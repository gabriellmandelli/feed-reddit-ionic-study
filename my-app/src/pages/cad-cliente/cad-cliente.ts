import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cad-cliente',
  templateUrl: 'cad-cliente.html',
})

export class CadClientePage {
  dadosCliente: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private frmBuilder: FormBuilder) {
    this.dadosCliente = this.frmBuilder.group({
      nome:['',Validators.required],
      sobreNome:['',Validators.required],
      dataNascimento:['',Validators.required]  
    })
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadClientePage');
  }

}
