import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.authenticationState.subscribe(state => {
      this.isLoggedIn = state;
    });
  }

}
