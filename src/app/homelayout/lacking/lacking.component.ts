import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-lacking',
  templateUrl: './lacking.component.html',
  styleUrls: ['./lacking.component.css']
})
export class LackingComponent {

  shouldChangeBackground = false;
  constructor(private auth:AuthService){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 400;
    this.shouldChangeBackground = window.pageYOffset > scrollThreshold;
  }

  subtitle: string = '';
  texts: string[] = ['At Programming', 'At Coding', 'At Skills'];
  textIndex: number = 0;
  charIndex: number = 0;

  ngOnInit() {
    this.typeSubtitle();
  }

  signup()
  {
    this.auth.loginWithRedirect({ 
      authorizationParams: {
          screen_hint: 'signup',
        }});
      }


  typeSubtitle() {
    if (this.charIndex < this.texts[this.textIndex].length) {
      this.subtitle += this.texts[this.textIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typeSubtitle(), 100); // Adjust the typing speed here (in milliseconds)
    } else {
      setTimeout(() => this.eraseSubtitle(), 1500); // Wait for 1.5 seconds before erasing
    }
  }

  eraseSubtitle() {
    if (this.charIndex > 0) {
      this.subtitle = this.subtitle.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.eraseSubtitle(), 50); // Adjust the erasing speed here (in milliseconds)
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      setTimeout(() => this.typeSubtitle(), 1000); // Wait for 1 second before typing the next text
    }
  }
}
