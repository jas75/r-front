import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../../UI/modals/login/login.component';
import { SignupComponent } from '../../UI/modals/signup/signup.component';

@Component({
  selector: 'cred-cmp',
  templateUrl: './cred.component.html',
  styleUrls: ['./cred.component.scss'],
})
export class CredComponent implements OnInit {

  constructor(
    private modalController: ModalController
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
