import { Component,EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
@Output() pagedecider = new EventEmitter<string>();
openPage(page:string){
    this.pagedecider.emit(page);
}
}