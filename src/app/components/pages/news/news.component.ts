import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-cmp',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {


  groupName: string = 'News group';
  username: string = 'username';
  title: string = 'title';
  content: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, at eos? Saepe delectus, iste explicabo repellat eaque deleniti dignissimos esse rem sequi dolore commodi quod recusandae nihil doloremque. At, molestias!';

  constructor() { }

  ngOnInit() {}

}
