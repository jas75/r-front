import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TextPage } from './text/text.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginComponent } from 'src/app/components/UI/modals/login/login.component';
import { SignupComponent } from 'src/app/components/UI/modals/signup/signup.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {


  isLoggedIn: boolean;

  constructor(
    private modalController: ModalController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.authenticationState.subscribe(state => {
      this.isLoggedIn = state;
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }


  async openTextModal() {

    this.dismissModal();
    
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: TextPage,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });
    await modal.present();
  }

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
}
