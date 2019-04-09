import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-cmp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  groupName: string = 'Home group';
  username: string = 'username';
  title: string = 'title';
  content: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, at eos? Saepe delectus, iste explicabo repellat eaque deleniti dignissimos esse rem sequi dolore commodi quod recusandae nihil doloremque. At, molestias!';
  constructor() { }

  ngOnInit() {}

}
