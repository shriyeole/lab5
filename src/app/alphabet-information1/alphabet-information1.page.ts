import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alphabet-information1',
  templateUrl: './alphabet-information1.page.html',
  styleUrls: ['./alphabet-information1.page.scss'],
})
export class AlphabetInformation1Page implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  async showNumber(number: number) {
    const alert = await this.alertController.create({
      header: 'Number',
      message: `You selected number ${number}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  navigateBack() {
    this.navCtrl.back();
  }

}
