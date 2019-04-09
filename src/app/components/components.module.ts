import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { PopComponent } from './pages/pop/pop.component';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
  declarations: [
    HomeComponent,
    PopComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HomeComponent,
    PopComponent,
    NewsComponent
  ]
})
export class ComponentsModule { }
