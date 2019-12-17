import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen : boolean = false;
    @HostListener('click', ['$event.target'])
    onClick() {
      console.log("raj kothari is an idiot");
   }
  }