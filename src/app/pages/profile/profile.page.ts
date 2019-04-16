import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  groupName: string = 'Home group';
  username: string = 'username';
  title: string = 'title de fou pour faire super long !!!!!!';
  content: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, at eos? Saepe delectus, iste explicabo repellat eaque deleniti dignissimos esse rem sequi dolore commodi quod recusandae nihil doloremque. At, molestias!';


  activeMenu = 1;

  slides;

  constructor() { }

  ngOnInit() {
    this.slides = this.returnSlides();
    this.slides.options = {
      effect: 'flip',
      initialSlide: 1
    };
  }

  navBarClick(menu: number) {
    this.slides.slideTo(menu).then(result => {
        this.activeMenu = menu;
      });
  }

  onSlideChange(event) {
    this.slides.getActiveIndex().then(index => {
      this.activeMenu = index;
    });

  }

  onScroll(event) {
    const navbar: any = document.getElementsByClassName('navbar-menu')[0];
    const slides: any = document.getElementById('slides-profile');
    if (event.detail.scrollTop  > 150) {
      navbar.style.position = 'fixed';
      navbar.style.top = '45px';
      slides.style.paddingTop = '60px';
    } else {
      slides.style.paddingTop = 'unset';
      navbar.style.position = 'unset';
    }
  }

  private returnSlides() {
    const slides: any = document.querySelector('#slides-profile');
    return slides;
  }

}
