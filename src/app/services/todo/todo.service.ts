import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  DocumentData,
  Firestore,
  query,
  where,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models/todo.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore, private auth: AuthService) {
    this.todosCollection = collection(this.firestore, 'todos');
  }

  getTodos() {
    const uid = this.auth.uid;
    const todosQuery = query(this.todosCollection, where('user_id', '==', uid));
    return collectionData(todosQuery) as Observable<ITodo[]>;
  }

  addTodo(value: string) {
    const uid = this.auth.uid;
    const newTodo = {
      completed: false,
      user_id: uid,
      value,
    };
    return addDoc(this.todosCollection, newTodo);
  }

  completeTodo(id: string, completed: boolean) {
    const ref = doc(this.firestore, `todos/${id}`);
    return updateDoc(ref, { completed: !completed });
  }

  deleteTodo(id: string) {
    const ref = doc(this.firestore, `todos/${id}`);
    return deleteDoc(ref);
  }
}
