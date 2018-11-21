import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navLinks= [
    { path: 'home', label: "Home"},
    { path: 'about-us',label: "About Us" },
    { path: 'services', label: "Services"},
    { path: 'instructors',label: "Instructors"},
    { path: 'gallery', label: "Gallery"},
    { path: 'contact-us', label: "Contacts"}
  ];
}
