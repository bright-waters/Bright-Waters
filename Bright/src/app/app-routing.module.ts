import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesComponent } from './Pages/services/services.component';
import { InstructorsComponent } from './Pages/instructors/instructors.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent  },
  { path: 'services', component: ServicesComponent  },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactComponent }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
