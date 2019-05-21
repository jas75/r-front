import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/UI/modals/login/login.component';
import { SignupComponent } from 'src/app/components/UI/modals/signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  indexScroll = 0;

  activeMenu = 1;

  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.slides().options = {
        effect: 'flip',
        initialSlide: 1
    };

    this.authService.authenticationState.subscribe(state => {
      this.isLoggedIn = state;
    });
  }

  navBarClick(menu: number) {
    this.slides().slideTo(menu).then(result => {
        this.activeMenu = menu;
      });
  }

  onSlideChange(event) {
    this.slides().getActiveIndex().then(index => {
      this.activeMenu = index;
    });

  }

  onSlidDrag(event) {
    const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-15px';
  }


  onScrollUp(event) {
    if (event.detail.scrollTop < this.indexScroll) {
      const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-15px';
    } else {
      const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-100px';
    }
    this.indexScroll = event.detail.scrollTop;
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

  dismissModal(afterLogin: boolean) {
    if (afterLogin) {
      this.modalController.dismiss(afterLogin);
    } else {
      this.modalController.dismiss();
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  private slides() {
    const slides: any = document.querySelector('#home-slider');
    return slides;
  }
}
