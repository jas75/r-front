import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onScroll(event) {
    // console.log(event)

    const navbar: any = document.getElementsByClassName('navbar-menu')[0];
    const slides: any = document.getElementsByTagName('ion-slides')[0];
    if (event.detail.scrollTop  > 150) {
      console.log('tamere');
      navbar.style.position = "fixed";
      navbar.style.top = "50px";
      slides.style.paddingTop = "55px";
    } else {
      slides.style.paddingTop = "unset";
      navbar.style.position = "unset";
    }

  }
}
