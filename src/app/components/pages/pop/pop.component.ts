import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pop-cmp',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {


  groupName: string = 'Popular group';
  username: string = 'username';
  title: string = 'title';
  content: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, at eos? Saepe delectus, iste explicabo repellat eaque deleniti dignissimos esse rem sequi dolore commodi quod recusandae nihil doloremque. At, molestias!';


  constructor() { }

  ngOnInit() {}

}
