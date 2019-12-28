import { Component} from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    dropdownState : boolean = false;
    changedropdownState(){
        this.dropdownState = !this.dropdownState;
    }
    constructor(private dataStorageService : DataStorageService){}
    onSaveData(){
        this.dataStorageService.storeRecipes();
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();;
    }
}