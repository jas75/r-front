import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/main/main.module#MainPageModule' },
  // { path: 'community', loadChildren: './pages/community/community.module#CommunityPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  // { path: 'inbox', loadChildren: './pages/inbox/inbox.module#InboxPageModule' },
  // { path: 'credentials', loadChildren: './pages/credentials/credentials.module#CredentialsPageModule' }
  // { path: 'pageHome', loadChildren: './components/components.module#ComponentsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
