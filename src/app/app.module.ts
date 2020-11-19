import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent},
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'todo', component: TodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProfileComponent,
    PostsComponent,
    GallaryComponent,
    TodoComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
