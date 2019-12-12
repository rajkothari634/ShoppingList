import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopProject';
  active = "Recipe";
  onNavigate(activenow:string){
    this.active=activenow;
  }
}
