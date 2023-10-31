import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleYouMayKnowComponent } from './posts/people-you-may-know/people-you-may-know.component';
import { UserLandingPageComponent } from './posts/user-landing-page/user-landing-page.component';
import { UserNavbarComponent } from './posts/user-navbar/user-navbar.component';
import { UserPostComponent } from './posts/user-post/user-post.component';
import { UserProfileInfoComponent } from './posts/user-profile-info/user-profile-info.component';
import { UserStorysComponent } from './posts/user-storys/user-storys.component';
import { WhoToFollowComponent } from './posts/who-to-follow/who-to-follow.component';
import { YourThoughtsComponent } from './posts/your-thoughts/your-thoughts.component';



@NgModule({
  declarations: [
    AppComponent,
    PeopleYouMayKnowComponent,
    UserLandingPageComponent,
    UserNavbarComponent,
    UserPostComponent,
    UserProfileInfoComponent,
    UserStorysComponent,
    WhoToFollowComponent,
    YourThoughtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
