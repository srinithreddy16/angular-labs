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

  text='';

  getWordCount(): number {
    if(!this.text.trim()){
      return 0;
    }
    return this.text.trim().split(/\s+/).length;
  }

  num1 = 0;
  num2 = 0;
  operator = '+';

  getResult(): number | string {
    if (this.operator === '+') {
      return this.num1 + this.num2;
    } else if (this.operator === '-') {
      return this.num1 - this.num2;
    } else if (this.operator === '*') {
      return this.num1 * this.num2;
    } else if (this.operator === '/') {
      return this.num2 === 0 ? 'Cannot divide by 0' : this.num1 / this.num2;
    }
    return 0;
  }

  fontSize = 16;

  increaseFont(){
    this.fontSize += 2;
  }

  decreaseFont(){
    if(this.fontSize > 8){
      this.fontSize -=  2;
    }
  }

  colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];
  selectedColor = 'Red';
}




