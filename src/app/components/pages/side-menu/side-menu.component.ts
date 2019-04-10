import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'side-menu-cmp',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {}


  closeSideMenu() {
    this.menuCtrl.close();
  }
}
