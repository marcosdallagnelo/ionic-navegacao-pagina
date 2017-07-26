import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TwoPage } from '../two/two';
import { App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the OnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {

  public twoPage = TwoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  homePage():void{
    this.app.getRootNav().setRoot(HomePage);
  }

}
