import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'news-cmp',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  newsPosts: Array<Post>;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getAllNewsPosts().subscribe(posts => {
      this.newsPosts = posts;
      console.log(this.newsPosts);
    });
  }

}
