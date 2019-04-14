import { Component, OnInit, Input } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CredentialsComponent } from '../../UI/modals/credentials/credentials.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'side-menu-cmp',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  constructor(
    private menuCtrl: MenuController,
    public modalController: ModalController,
    private authService: AuthService
  ) { }

  ngOnInit() {}

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
      if(event.data) {
        this.closeSideMenu();
      }
    })
         
    await modal.present();
}


  closeSideMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.authService.logout();
  }
}
