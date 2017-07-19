import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Pagina2Page } from './../pagina2/pagina2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pagina2 = Pagina2Page;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  irPagina2(){
    let confirm = this.alertCtrl.create({
      title: 'Atención estás saliendo de esta pantalla?',
      message: 'Seguro que quieres ir a página 2?',
      buttons: [
        {
          text: 'Cancelar',
          handler: ()=>{
            console.log('has cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler:()=>{
            this.navCtrl.push(Pagina2Page);
            console.log('navegando');
          }
        }
      ]
    });
    confirm.present();

  }

}
