
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
// import { IntroduccionPage } from './../pages/introduccion/introduccion';
import { AjustesProvider } from './../providers/ajustes/ajustes';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ajustesProvider: AjustesProvider) {
    platform.ready().then(() => {

      this.ajustesProvider.cargarStorage().then(()=>{

        if(this.ajustesProvider.ajustes.mostrarTutorial){
          this.rootPage = 'IntroduccionPage';
        } else {
          this.rootPage = HomePage
        }
        
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();

      });

    });
  }
}

