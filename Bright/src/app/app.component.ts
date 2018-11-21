import { Component } from '@angular/core';
import {ServicesComponent} from "./Pages/services/services.component";
import {AboutComponent} from "./Pages/about/about.component";
import {InstructorsComponent} from "./Pages/instructors/instructors.component";
import {ContactComponent} from "./Pages/contact/contact.component";
import {HomeComponent} from "./Pages/home/home.component";
import {GalleryComponent} from "./Pages/gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navLinks= [
    { path: 'home', label: "About"},
    { path: 'about-us',label: "About Us" },
    { path: 'services', label: "Services"},
    { path: 'instructors',label: "Instructors"},
    { path: 'gallery', label: "Gallery"},
    { path: 'contact-us', label: "Contacts"}
  ];
}
