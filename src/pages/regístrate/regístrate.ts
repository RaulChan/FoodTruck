import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegístratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regístrate',
  templateUrl: 'regístrate.html',
})
export class RegístratePage {
  name:string;
  lastname:string;
  age:string;
  correo:string;
  telefono:string;
  username:string;
  password:string;
  repassword:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegístratePage');
  }
  registrarse(){
    if(this.name==null || this.lastname==null || this.age==null || this.correo==null || this.telefono==null || this.username==null || this.password==null || this.repassword==null ){
      alert("Por favor rellena todos los campos");
    }
    else if(this.password!=this.repassword){
      alert("La contraseña no coincide.");
    }

  }
}
