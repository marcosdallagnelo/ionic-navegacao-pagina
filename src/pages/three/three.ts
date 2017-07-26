import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ThreePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-three',
  templateUrl: 'three.html',
})
export class ThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  homePage():void{
    this.app.getRootNav().setRoot(HomePage);
  }
  
}
