import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UsersHeaderComponent } from './components/users-header/users-header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersHeaderComponent,
    UsersListComponent,
    UserDataComponent,
    AlbumsListComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
