import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { PopComponent } from './pages/pop/pop.component';
import { NewsComponent } from './pages/news/news.component';
import { CardComponent } from './UI/card/card.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { CredentialsComponent } from './pages/credentials/credentials.component';
import { LoginComponent } from './UI/modals/login/login.component';
import { SignupComponent } from './UI/modals/signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    PopComponent,
    NewsComponent,
    CardComponent,
    SideMenuComponent,
    CredentialsComponent,
    LoginComponent,
    SignupComponent
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
    SideMenuComponent,
    CredentialsComponent
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ]
})
export class ComponentsModule { }
