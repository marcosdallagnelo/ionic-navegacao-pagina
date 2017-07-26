import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnePage } from '../one/one';
import { TwoPage } from '../two/two';
import { ThreePage } from '../three/three';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public onePage = OnePage;
  public twoPage = TwoPage;
  public threePage = ThreePage;

  constructor(public navCtrl: NavController) {

  }

}
