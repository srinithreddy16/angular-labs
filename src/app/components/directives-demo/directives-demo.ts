import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemo {
  num = 5;
  courseArr = ['Java', 'Spring', 'SQL', 'Linux', 'Angular', 'Spring Boot'];

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];


   tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];

  filter = 'All';

  get filteredTasks(){
    if(this.filter === 'Completed'){
      return this.tasks.filter((task) => task.completed);
    }
    if(this.filter === 'Pending'){
      return this.tasks.filter((task) => !task.completed);
    }

    return this.tasks;
  }

  get completedCount(){
    return this.tasks.filter((task) => task.completed).length;
  }


  
}

