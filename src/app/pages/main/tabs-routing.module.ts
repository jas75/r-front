import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPage } from './main.page';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { TextPageModule } from '../post/text/text.module';
import { PostPageModule } from '../post/post.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children:
      [
        {
          path: 'tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../home/home.module#HomePageModule'
              }
            ]
        },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../community/community.module#CommunityPageModule',
                // canActivate: [AuthGuardService]
              }
            ]
        },
        {
            path: 'tab4',
            children:
              [
                {
                  path: '',
                  loadChildren: '../profile/profile.module#ProfilePageModule'
                }
              ]
          },
          {
            path: 'tab5',
            children:
              [
                {
                  path: '',
                  loadChildren: '../inbox/inbox.module#InboxPageModule'
                }
              ]
          },
          { path: 'text', loadChildren: '../post/text/text.module#TextPageModule' },
          { path: 'post', loadChildren: '../post/post.module#PostPageModule' },
        {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}