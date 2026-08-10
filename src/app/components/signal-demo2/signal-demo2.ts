import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { Todo } from '../../models/todo';   

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  todos: WritableSignal<Todo[]>  = signal([
    { id: 1, title: 'Learn Angular Signals', isCompleted: false },
    { id: 2, title: 'Complete assignment', isCompleted: false },
    { id: 3, title: 'Buy groceries', isCompleted: true },
  ]);

  newTodoTitle: WritableSignal<string> = signal('');

  completedToDos: Signal<Todo[]> = computed(() =>
  this.todos().filter((todo) => todo.isCompleted));

  remainingToDos: Signal<Todo[]> = computed(() =>
  this.todos().filter((todo) => !todo.isCompleted));

  toggleTodo(id: number){
    this.todos.update((currentTodos) =>
      currentTodos.map((todo) =>
      todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
  );
  }

  deleteTodo(id: number) {
    this.todos.update((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id) 
    );
  }

  updateNewTodoTitle(event: Event){
    const input = event.target as HTMLInputElement;
    this.newTodoTitle.set(input.value);
  }

  addTodo(){
    const title = this.newTodoTitle().trim();
    if (!title) {
      return;
    }

    const newTodo: Todo ={
      id: Date.now(),
      title: title,
      isCompleted: false,
    };

    this.todos.update((currentTodos) => [...currentTodos, newTodo]);
    this.newTodoTitle.set('');
  }
}
