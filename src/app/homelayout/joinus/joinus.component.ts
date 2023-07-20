import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent {
constructor(private auth:AuthService) {
  
}
signup()
{
  this.auth.loginWithRedirect({ 
    authorizationParams: {
        screen_hint: 'signup',
      }});
    }

}
