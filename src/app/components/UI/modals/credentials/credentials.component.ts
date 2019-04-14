import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss', '../modal.component.scss'],
})
export class CredentialsComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}


  async openLoginModal() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: LoginComponent,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });

    modal.onDidDismiss().then(event => {
      if (event.data) {
        this.dismissModal(event.data);
      }
    });
    
    await modal.present();
  }

  async openSignupModal() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: SignupComponent,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });

    modal.onDidDismiss().then(event => {
      if (event.data) {
        this.dismissModal(event.data);
      }
    });
    await modal.present();
  }

  dismissModal(afterLogin: boolean) {
    if (afterLogin) {
      this.modalController.dismiss(afterLogin);
    } else {
      this.modalController.dismiss();
    }
  }

}
