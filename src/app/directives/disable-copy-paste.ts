import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCopyPaste]',
})
export class DisableCopyPaste {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPaste(event: any) {
    console.log('event ', event.type);
    event.preventDefault();
  }
}
