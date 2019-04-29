import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'home-cmp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  post: Post = {
    _id: 'blabla',
    username: 'dov75',
    community: 'communityName',
    title: 'un titre',
    content: 'du contenu'
  };


  constructor() { }

  ngOnInit() {}

}
