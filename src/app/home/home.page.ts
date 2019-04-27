import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController
} from "@ionic/angular";
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("username") username;
  @ViewChild("password") password;
  data: string;
  constructor(
    public navCtrl: NavController  ) {}

  async signIn(){
    const loading = document.querySelector('ion-loading-controller');
    await loading.componentOnReady();
    const alertCtrl = document.querySelector('ion-alert-controller');
    await alertCtrl.componentOnReady();

    if(this.username.value==""){
      const alert = await alertCtrl.create({
        header:"Atencion",
        subHeader:"Campo usuario vacio",
        buttons:["OK"]
      });
      await alert.present();
    }else{
      if(this.username.value==""){
        const alert = await alertCtrl.create({
          header:"Atencion",
          subHeader:"Campo password vacio",
          buttons:["OK"]
        });
        await alert.present();
      }else{
        /*const alert = await alertCtrl.create({
          header:"Bienvenido",
          buttons:["OK"]
        });
        await alert.present();*/
        this.navCtrl.navigateForward('inicio');
      }
    }
  }
}
