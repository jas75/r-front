import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../modal.component.scss'],
})
export class SignupComponent implements OnInit {


  signupForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  logForm() {
    console.log(this.signupForm.value);
  }


  dismissModal() {
    this.modalController.dismiss();
  }
}
