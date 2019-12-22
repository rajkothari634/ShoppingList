import { Component} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
dropdownState : boolean = false;
changedropdownState(){
this.dropdownState = !this.dropdownState;
}
}