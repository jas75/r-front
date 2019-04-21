import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isLoggedIn: boolean;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.authService.authenticationState.subscribe(state => {
      this.isLoggedIn = state;
    });
    this.initializeApp();
    
    // if (this.isLoggedIn) {
    //   console.log('connecte')
    // } else {
    //   console.log('pas connecte')
    // }
    // if (this.authService.isAuthenticated()) {
    //   this.isLoggedIn = true;
    // } else {
    //   this.isLoggedIn = false;
    // }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  // isLog() {
  //     // this.authService.authenticationState.subscribe(state => {
  //     //   this.isLoggedIn = state;
  //     // });

  //     this.authService.isAuthenticated();
  //     console.log(this.isLoggedIn);
  // }


}
