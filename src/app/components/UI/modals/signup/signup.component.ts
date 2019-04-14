import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../modal.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logForm() {

    this.authService.register(this.signupForm.value).subscribe( res => {
      this.authService.login(this.signupForm.value).subscribe(() => {
        this.dismissModal(true);
      });
    });
  }

  dismissModal(afterLogin: any) {
    if (afterLogin) {
      this.modalController.dismiss(afterLogin);
    } else {
      this.modalController.dismiss();
    }
  }
}
