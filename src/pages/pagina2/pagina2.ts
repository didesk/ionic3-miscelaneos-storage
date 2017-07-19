import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the Pagina2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  irPagina3(){
    this.navCtrl.push('mi-pagina3');
  }

  //Ciclos de vida de página implemtnación
  ionViewDidLoad(){
  console.log('ionViewDidLoad');   
  }
  ionViewWillEnter(){
    console.log('  ionViewWillEnter');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave(){
    console.log(' ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }
  ionViewWillUnload(){
    console.log(' ionViewWillUnload');
  }
  ionViewCanEnter(){
    // console.log('ionViewCanEnter');
    // let numero = Math.round( Math.random() * 10);

    // console.log(numero);
    // if(numero >= 3 ){
    //   return true;
    // } else {
    //   return false;
    // }
   
    let promesa = new Promise((resolve,reject)=>{
        
        let confirm = this.alertCtrl.create({
        title: 'Atención',
        message: 'Seguro que quieres entrar enpagina 2?',
        buttons: [
          {
            text: 'Cancelar',
            handler: ()=> resolve( false )
            
          },
          {
            text: 'Aceptar',
            handler:()=> resolve( true )
          }
        ]
      });
      confirm.present();

    });

    return promesa;

  }


  
  ionViewCanLeave(){
    console.log('ionViewCanLeave');

    console.log('Espere dos segundos para salir');
    let promesa = new Promise((resolve, reject)=>{

      setTimeout(()=>{
        resolve(true);
      }, 2000)
    })

    return promesa;
  }
  

}
