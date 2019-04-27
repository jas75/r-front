import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

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
    private alertController: AlertController,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.textForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['']
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  logForm() {

    this.authService.getUserId().then(userid => {
      this.userService.getProfile(userid).subscribe(userResponse => {
        const post = {
          username: userResponse.user.username,
          community: userid,
          title: this.textForm.controls.title.value,
          content: this.textForm.controls.content.value
        };

        this.postService.createTextPost(post).subscribe(res => {
          if (res.success) {
            this.dismissModal();
            this.router.navigate(['/single-post', res.post._id]);
          }
        },
        // handle all error cases
        err => console.log(err));
        
      });
    });
  }

  showAlert(msg) {
    const alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });

    alert.then(thealert => thealert.present());
  }

}
