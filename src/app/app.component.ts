import { Component } from '@angular/core';

import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalComponent } from './components/UI/modal/modal.component';
import { CredentialsPage } from './pages/credentials/credentials.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isLoggedIn = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  async openModal() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: CredentialsPage,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });
    await modal.present();
}


  closeSideMenu() {
    this.menuCtrl.close();
  }
}
