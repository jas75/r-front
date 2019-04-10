import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../modal.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}


  dismissModal() {
    this.modalController.dismiss();
  }
}
