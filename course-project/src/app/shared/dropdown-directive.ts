import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostListener('click') onClick(eventData: Event){
    console.log('just clicked !');
  };
}
