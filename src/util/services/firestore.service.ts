import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { FireDocument } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private document: AngularFirestoreDocument<FireDocument>;

  constructor (private afs: AngularFirestore) { }

  getData (docpath: string): Observable<FireDocument> {
    this.document = this.afs.doc(docpath);
    return this.document.valueChanges();
  }
}
