import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'credits', component: CreditsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [
  RouterModule
  ],
})
export class AppRoutingModule { }
