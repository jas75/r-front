import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

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
