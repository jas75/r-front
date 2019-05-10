import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.page.html',
  styleUrls: ['./create-community.page.scss'],
})
export class CreateCommunityPage implements OnInit {

  createCommunityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createCommunityForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      topic: ['', [Validators.required]],
      summary: ['']
    });
  }

  logForm() {
    this.authService.getUserId().then(userid => {
      this.userService.getProfile(userid).subscribe(userResponse => {
        const community = {
          createdBy: userResponse.user.username,
          createdAt: 'une date',
          name: this.createCommunityForm.controls.name.value,
          topic: this.createCommunityForm.controls.topic.value,
          summary: this.createCommunityForm.controls.summary.value
        };

        console.log(community);
      });
    });
  }
}
