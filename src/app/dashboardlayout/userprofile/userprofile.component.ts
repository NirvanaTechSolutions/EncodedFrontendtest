import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  userProfile: any;
  substatus:any;
  constructor(private main:MainService,public auth: AuthService,private router:Router)
  {
   
  }

 async ngOnInit() {
  
 
      this.loadProfile()
 }
      

 loading: boolean = false;

  

paymentdetails:any
 async loadProfile() {
     
      console.log("going to apis")
      this.loading=true
     await this.main.fetchapi()
        .then((response) => {
          this.userProfile = response;

          this.loading = false
        })
        .catch((error :any) => {
          console.error('Failed to fetch profile', error);
        });
    
  }

}
