import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PostResponse, Post } from 'src/app/interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  createTextPost(post): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.url + '/api/post/text', post);
  }

  getPostByPostId(postid): Observable<PostResponse> {
    return this.http.get<PostResponse>(this.url + '/api/post/get-post/' + postid);
  }

  getAllNewsPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.url + '/api/post/get-all-news-posts');
  }

}
