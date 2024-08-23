import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  getImageUrl(imagePath: string): Observable<string> {
    return this.storage.ref(imagePath).getDownloadURL();
  }
}
