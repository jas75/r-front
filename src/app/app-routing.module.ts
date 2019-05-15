import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'single-post/:post-id', loadChildren: './pages/single-post/single-post.module#SinglePostPageModule' },
  {
    path: 'create-community',
    loadChildren: './pages/community/create-community/create-community.module#CreateCommunityPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'single-community/:community-id',
    loadChildren: './pages/community/single-community/single-community.module#SingleCommunityPageModule'
   },
  // { path: 'text', loadChildren: './pages/post/text/text.module#TextPageModule' },
  // { path: 'post', loadChildren: './pages/post/post.module#PostPageModule' },
  // { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
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
