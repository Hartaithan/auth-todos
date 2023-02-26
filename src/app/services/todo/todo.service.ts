import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models/todo.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore, private auth: AuthService) {
    this.todosCollection = collection(firestore, 'todos');
  }

  getTodos() {
    const uid = this.auth.uid;
    const todosQuery = query(this.todosCollection, where('user_id', '==', uid));
    return collectionData(todosQuery) as Observable<ITodo[]>;
  }
}
