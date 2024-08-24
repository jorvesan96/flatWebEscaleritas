import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms'; // Agrega esta línea

import { FirebaseModule } from './services/firebase.module';  // Importa el módulo separado

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    FirebaseModule,
    FormsModule,
    HttpClientModule, // Asegúrate de que HttpClientModule esté aquí
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
