import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective{
    @HostBinding('class.show') isOpen : boolean = false;
    @HostListener('click') toggleOpen(){
        console.log("thats right");
        this.isOpen = !this.isOpen;
    }
}