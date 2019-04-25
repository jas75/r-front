import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  goBackHome() {
    this.router.navigate(['/tabs/tab1']);
  }

}
