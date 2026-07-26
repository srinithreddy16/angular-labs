import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({                        // @Component - Decorator marks a class as an Angular component
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  userName = 'Virat Kohli';
  img_url = 'https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png';

  flag = true;

  toggleFlag() {
    this.flag = !this.flag;
  }

  
  states = ['Arkansas', 'Colorado', 'Denver', 'Texas', 'California'];
    selectedState = '';

    showPassword = false;
    togglePasswordType(){
      this.showPassword = !this.showPassword;
    }



    count = 0;
    increment(){
      this.count++;
    }

    decrement(){
      this.count--;
    }

    reset(){
      this.count = 0;
    }

    celsius=0;

    getGreeting(): string{
      const hour = new Date().getHours();

      if(hour<12){
        return 'GoodMorning';
      } else if (hour<17){
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    }

  stateChanged(event: any) {
    this.selectedState = event.target.value;
  }
}

