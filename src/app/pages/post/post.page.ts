import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TextPage } from './text/text.page';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
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
}
