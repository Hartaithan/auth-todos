import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.todosCollection = collection(firestore, 'todos');
  }

  getTodos() {
    return collectionData(this.todosCollection) as Observable<ITodo[]>;
  }
}
