import { Component, OnInit, Input } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CredentialsComponent } from '../../UI/modals/credentials/credentials.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'side-menu-cmp',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  isLoggedIn: boolean;

  user: User;

  constructor(
    private menuCtrl: MenuController,
    public modalController: ModalController,
    private authService: AuthService,
    private userService: UserService,
    private storage: Storage
  ) { }

  ngOnInit() {

    console.log('SideMenuComponent loaded');

    this.authService.authenticationState.subscribe(state => {
      if (state) {
        this.isLoggedIn = state;
        this.storage.get('userid').then(id => {
          this.userService.getProfile(id).subscribe(res => {
            if (res.success) {
              this.user = res.user;

              console.log(this.user);
            }
          });
        });
      } else {
        this.isLoggedIn = state;
      }
    });
  }

  async openModal() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: CredentialsComponent,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });

    modal.onDidDismiss().then(event => {
      if (event.data) {
        this.closeSideMenu();
      }
    });
    await modal.present();
}


  closeSideMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.authService.logout();
  }
}
