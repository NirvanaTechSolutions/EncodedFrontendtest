import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent {

  loading:any

  pricing:any
  
    constructor( public auth: AuthService,private router:Router,private main:MainService,private route:ActivatedRoute) {
     
     this.loading =true

    this.checksub()

  
     
    }
  
  
    
   async logoutuser()
   {
    localStorage.clear()
    await this.main.logout();
    
   }

   async checksub()
   {
    await (await this.main.checksubscription()).subscribe((response:any)=>{
     if(response.exists == true)
     {
      this.pricing = false
     }
     else
     {
      this.pricing = true
     }
     
    
    })
    }
    
   }
  
  

   

  

