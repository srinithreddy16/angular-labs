import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEvent'],

})
export class EmployeeAdd {

  addEvent = new EventEmitter<any>();

  newEmployee: any = {name: '', department: '', salary: null};

  submitEmployee(){
    this.addEvent.emit({...this.newEmployee});  // make a COPY, give parent the copy
    this.newEmployee= {name: '', department: '', salary: null}; //emptying the newEmployee box lets think
  }


}
