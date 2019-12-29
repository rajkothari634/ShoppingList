import { Component, OnInit, OnDestroy} from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{
    dropdownState : boolean = false;
    userSub : Subscription;
    isAuth = false;
    changedropdownState(){
        this.dropdownState = !this.dropdownState;
    }
    constructor(private dataStorageService : DataStorageService
        ,private authServices : AuthService,
        private router : Router){}
    onSaveData(){
        this.dataStorageService.storeRecipes();
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();;
    }
    logout(){
        this.authServices.logout();
        this.router.navigate(['/auth']);
    }
    ngOnInit(){
        this.userSub = this.authServices.user.subscribe(user => {
            this.isAuth = !!user;
            console.log(!!user);
        });
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}