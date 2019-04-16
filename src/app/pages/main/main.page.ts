import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { PostPage } from '../post/post.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  // Side menu methods
  openFirst() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  openCustom() {
    this.menuCtrl.enable(true, 'custom');
    this.menuCtrl.open('custom');
  }


  async openModal() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: PostPage,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          },
          cssClass: 'custom-modal'
    });
    await modal.present();
  }


}
