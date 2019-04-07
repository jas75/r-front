import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {

    const slides = document.querySelector('ion-slides');
      slides.options = {
        effect: 'flip',
        initialSlide: 1
      };
  }

  onSlideChange(event) {
    console.log(event);

    const slides = document.querySelector('ion-slides');

    slides.getActiveIndex().then(result => {
      console.log(result);
    });

    slides.isBeginning().then(result => {
      console.log(result);
    });
  }




}