import { Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-demo4',
  imports: [FormsModule],
  templateUrl: './signal-demo4.html',
  styleUrl: './signal-demo4.css',
})
export class SignalDemo4 {
  country = signal('India');

  stateMap: Record<string, string[]> = {
    India: ['Andhra Pradesh', 'Telangana', 'Kerala', 'Karnataka'],
    USA: ['Texas', 'Michigan', 'NewYork'],
    Canada: ['Ontario', 'Alberta', 'Quebec'],
  };

  states = computed(() => this.stateMap[this.country()]);

  // depends on country, but its writable
  selectedState = linkedSignal(() => {
    const country = this.country();
    return this.stateMap[country][0];
  });

  changeCountry(event: any) {
    this.country.set(event.target.value);
  }
  changeState(event: any) {
    this.selectedState.set(event.target.value);
  }
}
