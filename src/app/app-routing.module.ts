import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { ContactComponent } from './contact/contact.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rooms', component: RoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
