import { Component, OnInit, Input } from '@angular/core';
import { testUserAgent } from '@ionic/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {


  @Input() post: Post;


  constructor(
    private router: Router
  ) { }


  ngOnInit() {}

  toSinglePost() {
    this.router.navigate(['/single-post', this.post._id]);
  }

}
