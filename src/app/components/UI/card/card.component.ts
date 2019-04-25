import { Component, OnInit, Input } from '@angular/core';
import { testUserAgent } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {


  @Input() groupName: string;
  @Input() username: string;
  @Input() title: string;
  @Input() content: string;


  constructor(
    private router: Router
  ) { }


  ngOnInit() {}

  toSinglePost() {
    this.router.navigate(['/single-post']);
  }

}
