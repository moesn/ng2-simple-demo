/// <reference path="typings/angular2/angular2" />

import {Component, View, bootstrap, For} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {AngularFire, FirebaseArray} from 'firebase/angularfire';

@Component({
  selector: 'todo-app',
  injectables: [
    AngularFire,
    bind(Firebase).toValue(new Firebase('https://ng2-demo.firebaseio.com/'))
]})
@View({
  templateUrl: 'todo.html',
  directives: [For]
})
class TodoApp {
  todoService: FirebaseArray;
  todoEdit: any;

  constructor(sync: AngularFire) {
    this.todoService = sync.asArray();
  }
  enterTodo($event, newTodo) {
    if($event.which === 13) { // ENTER_KEY
      this.addTodo(newTodo.value);
      newTodo.value = '';
    }
  }
  addTodo(newTitle) {
    this.todoService.add({
      title: newTitle,
      completed: false
    });
  }
  completeMe(todo) {
    todo.completed = !todo.completed;
    this.todoService.save(todo);
  }
  deleteMe(todo) {
    this.todoService.remove(todo);
  }
  toggleAll($event) {
    var isComplete = $event.target.checked;
    this.todoService.list.forEach((todo)=> {
      todo.completed = isComplete;
      this.todoService.save(todo);
    });
  }
  clearCompleted() {
    var toClear = {};
    this.todoService.list.forEach((todo) => {
      if(todo.completed) {
        toClear[todo._key] = null;
      }
    });
    this.todoService.bulkUpdate(toClear);
  }

}
bootstrap(TodoApp);
