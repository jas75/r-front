import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { PopComponent } from './pages/pop/pop.component';
import { NewsComponent } from './pages/news/news.component';
import { CardComponent } from './UI/card/card.component';
import { ModalComponent } from './UI/modal/modal.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    PopComponent,
    NewsComponent,
    CardComponent,
    ModalComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HomeComponent,
    PopComponent,
    NewsComponent,
    CardComponent,
    SideMenuComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ComponentsModule { }
