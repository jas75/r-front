import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
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

  dismissModal() {
    this.modalController.dismiss();
  }

}
