import { Component, OnInit, Input } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CredentialsPage } from 'src/app/pages/credentials/credentials.page';

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
