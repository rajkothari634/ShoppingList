import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ShopProject';
  active = "Recipe";
  onNavigate(activenow:string){
    this.active=activenow;
  }
  constructor(private authService : AuthService){

  }
  ngOnInit(){
    this.authService.autoLogin(); 
  }
}
