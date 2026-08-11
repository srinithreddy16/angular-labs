import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signal-demo5',
  imports: [],
  templateUrl: './signal-demo5.html',
  styleUrl: './signal-demo5.css',
})
export class SignalDemo5 {
  fruits = signal<string[]>([
    'Apple',
    'Banana',
    'Mango',
    'Orange',
    'Grapes',
    'Pineapple',
    'Watermelon',
    'Papaya',
  ]);

  searchText = signal('');

  filteredFruits = computed(() =>{
    const text = this.searchText().toLowerCase();

    if(!text){
      return this.fruits();
    }

    return this.fruits().filter((fruit) => fruit.toLowerCase().includes(text));
  });

  changeSearchText(event: any){
    this.searchText.set(event.target.value); //replaces the entire current value of the searchText
  }
}
