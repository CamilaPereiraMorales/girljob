import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

   //Crea una nueva postulante
   public createPostulant(data: {nombre: string, url: string}) {
    return this.firestore.collection('postulants').add(data);
  }

    //Obtiene una postulante
    public getPostulant(documentId: string) {
      return this.firestore.collection('postulants').doc(documentId).snapshotChanges();
    }

      //Obtiene todas las postulantes
  public getPostulants() {
    return this.firestore.collection('postulants').snapshotChanges();
  }

//Actualiza una Postulante
public updatePostulant(documentId: string, data: any) {
  return this.firestore.collection('postulants').doc(documentId).set(data);
}


}