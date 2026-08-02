import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['employees'],
  outputs: ['deleteEvent'],
})
export class EmployeeTable {
  employees: any[] = []
  faTrash = faTrash;

  deleteEvent = new EventEmitter<any>();

  deleteEmployee(emp: any){
    this.deleteEvent.emit(emp);
  }
}

/*
EventEmitter — a built-in Angular class whose entire job is to let a component "shout" an event outward, 
so that whoever is listening (usually a parent) can react to it. Think of it as a walkie-talkie the child holds — the child presses the button and speaks, but doesn't know or 
care who's listening on the other end. new EventEmitter<any>() — this creates an actual instance of the EventEmitter class. Just like new Date() creates a Date object, new EventEmitter<any>() 
creates an emitter object, ready to be used.
line 19 and 20 comment - "Fire the deleteEvent event, and attach this specific employee object as the data traveling with it."
at this point, the child hasn't actually deleted anything. The child doesn't own the array (remember — data ownership is in the parent), so all the child can do is notify the parent "hey, 
someone wants to delete this employee" and hand over which one. 
The actual deletion logic lives elsewhere — in the parent.
*/
