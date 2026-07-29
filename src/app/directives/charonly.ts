import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharonly]',
})
export class Charonly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyup(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value ?? '';
    const regex = /^[a-zA-Z]*$/;
    // let regex = new RegExp(/^[0-9]*$/);
    this.myBgColor = regex.test(value) ? 'lightgreen' : 'red';
  }
}
