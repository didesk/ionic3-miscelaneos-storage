import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrarTutorial: true
  }

  constructor(private platform: Platform ) {
    console.log('Hello AjustesProvider Provider');
  }

  cargarStorage(){

    let promesa = new Promise((resolve,reject)=>{

      if(this.platform.is('cordova')) {
        //dispositivo

      } else {
        //escritorio
        if(localStorage.getItem('ajustes')){
          this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        }

        resolve();
      
      }

    });

    return promesa;



  }

  guardarStorage(){

    if(this.platform.is('cordova')) {
      //dispositivo
    } else {
      //escritorio
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes) );
    }

  }

}
