import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {


  post: Post;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPostByPostId(this.activatedRoute.snapshot.paramMap.get('post-id')).subscribe(res => {
      this.post = res.post;

      console.log(this.post);
    });
  }

  goBackHome() {
    this.router.navigate(['/tabs/tab1']);
  }

}
