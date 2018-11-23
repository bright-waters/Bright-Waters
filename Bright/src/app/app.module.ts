import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule, MatExpansionModule, MatTabsModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import {ServicesComponent} from "./Pages/services/services.component";
import {GalleryComponent} from "./Pages/gallery/gallery.component";
import {InstructorsComponent} from "./Pages/instructors/instructors.component";
import {ContactComponent} from "./Pages/contact/contact.component";
import {AboutComponent} from "./Pages/about/about.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    InstructorsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
