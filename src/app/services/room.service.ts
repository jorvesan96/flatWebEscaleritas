import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private firestore: AngularFirestore) {}

  // Obtén los datos de las habitaciones desde Firestore
  getRooms(): Observable<any[]> {
    return this.firestore.collection('Rooms').valueChanges();
  }
}
