import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { PostPage } from '../post/post.page';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.authService.authenticationState.subscribe(state => {
      this.isLoggedIn = state;
    });
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
