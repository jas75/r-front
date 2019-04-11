import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { PopComponent } from './pages/pop/pop.component';
import { NewsComponent } from './pages/news/news.component';
import { CardComponent } from './UI/card/card.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { CredentialsComponent } from './UI/modals/credentials/credentials.component';
import { LoginComponent } from './UI/modals/login/login.component';
import { SignupComponent } from './UI/modals/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    PopComponent,
    NewsComponent,
    CardComponent,
    SideMenuComponent
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    CredentialsComponent
  ]
})
export class ComponentsModule { }
