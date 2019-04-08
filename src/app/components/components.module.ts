import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
