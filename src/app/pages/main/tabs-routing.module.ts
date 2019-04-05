import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPage } from './main.page';

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
                loadChildren: '../community/community.module#CommunityPageModule'
              }
            ]
        },
        {
            path: 'tab4',
            children:
              [
                {
                  path: '',
                  loadChildren: '../chat/chat.module#ChatPageModule'
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