import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  indexScroll = 0;


  test: Array<any> = [2,3,1,5,4,9,34,0];

  constructor() { }

  ngOnInit() {

    const slides = document.querySelector('ion-slides');
      slides.options = {
        effect: 'flip',
        initialSlide: 1
      };
  }

  onSlideChange(event) {
    // console.log(event);

    // const slides = document.querySelector('ion-slides');

    // slides.getActiveIndex().then(result => {
    //   console.log(result);
    // });

    // slides.isBeginning().then(result => {
    //   console.log(result);
    // });
  }


  onScrollUp(event) {;
    if(event.detail.scrollTop < this.indexScroll) {
      const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-15px';
    }
    else {
      const bandeau: any = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '-50px';
    }
    this.indexScroll = event.detail.scrollTop;
  }
}