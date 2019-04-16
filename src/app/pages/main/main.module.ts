import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { PostPageModule } from '../post/post.module';
import { TextPageModule } from '../post/text/text.module';



@NgModule({
  imports: [
    TextPageModule,
    PostPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
