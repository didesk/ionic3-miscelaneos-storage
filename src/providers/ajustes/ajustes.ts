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
       if(this.platform.is('cordova')) {
      //dispositivo
    } else {
      //escritorio
      if(localStorage.getItem('ajustes')){
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      }
     
    }


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
