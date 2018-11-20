import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegístratePage } from '../regístrate/regístrate';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  username:string;
  password:string;
  constructor(public navCtrl: NavController) {

  }

login(){
//Aqui se escribe todo el codigo de autenticacion de login

console.log("Username: "+ this.username); //Este nombre de usuario
console.log("Password: "+ this.password); //Esta contraseña
this.navCtrl.push(PrincipalPage);
}
registrarse(){
  this.navCtrl.push(RegístratePage);
}

}
