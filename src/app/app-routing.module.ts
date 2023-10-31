import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingPageComponent } from 'src/app/posts/user-landing-page/user-landing-page.component';

const routes: Routes = [
  {path: 'index',component:UserLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
