import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {
  
  textForm: FormGroup;

  userId: string;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authService: AuthService,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.authService.getUserId().then(userid => {
      this.userId = userid;
    });

    this.textForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['']
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  logForm() {

    const post = {
      userid: this.userId,
      community: this.userId,
      title: this.textForm.controls.title.value,
      content: this.textForm.controls.content.value
    };

    this.postService.createTextPost(post).subscribe(res => {
      if (res.success) {
        console.log('maintenant redirige vers une page article');
      }
      
      if(res.msg) {
        this.showAlert(res.msg);
      }
    });
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });

    alert.then(thealert => thealert.present());
  }

}
