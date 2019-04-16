import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  indexScroll = 0;

  activeMenu = 1;

  constructor() { }

  ngOnInit() {
    this.slides().options = {
        effect: 'flip',
        initialSlide: 1
      };
  }

  navBarClick(menu: number) {
    this.slides().slideTo(menu).then(result => {
        this.activeMenu = menu;
      });
  }

  onSlideChange(event) {
    this.slides().getActiveIndex().then(index => {
      this.activeMenu = index;
    });

  }

  onSlidDrag(event) {
    const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-15px';
  }


  onScrollUp(event) {
    if (event.detail.scrollTop < this.indexScroll) {
      const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-15px';
    } else {
      const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-100px';
    }
    this.indexScroll = event.detail.scrollTop;
  }

  private slides() {
    const slides: any = document.querySelector('#home-slider');
    return slides;
  }


}