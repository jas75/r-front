import { Component, OnInit, Input } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CredentialsComponent } from '../../UI/modals/credentials/credentials.component';

@Component({
  selector: 'side-menu-cmp',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  constructor(
    private menuCtrl: MenuController,
    public modalController: ModalController
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
         
    await modal.present();
}


  closeSideMenu() {
    this.menuCtrl.close();
  }
}
