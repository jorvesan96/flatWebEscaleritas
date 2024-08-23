import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';
import { FirebaseModule } from './services/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoomsComponent,
    ContactComponent,
    PicturesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
