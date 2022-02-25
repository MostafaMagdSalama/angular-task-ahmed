import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: 'user/:id', component: AlbumsListComponent },
  { path: '', component: UsersListComponent },
  {path:'album/:id',component:AlbumPhotosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
