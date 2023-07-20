
import {MainService} from '../../services/main.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Component, HostListener, Renderer2,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrollPosition = 0;


  constructor(public main: MainService,private http: HttpClient,private router:Router,private renderer: Renderer2,private el: ElementRef)
  {

  

  }
  
  isNavbarDark = false;
  scrollThreshold1 = 700;
  scrollThreshold2=1950;
  scrollThreshold3:any


  ngOnInit() {
    this.observeScroll();
  }

  observeScroll() {
    this.updateNavbarColor(window.pageYOffset);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    this.updateNavbarColor(scrollPosition);
  }

  updateNavbarColor(scrollPosition: number) {
    const navbarElement = this.el.nativeElement.querySelector('.navbar');
    
    if (navbarElement) {
      if (scrollPosition >= this.scrollThreshold1 && scrollPosition < this.scrollThreshold2) {
        // Apply color for threshold 1
        this.renderer.setStyle(navbarElement, 'background', 'linear-gradient(to left, black, black)');
      } else if (scrollPosition >= this.scrollThreshold2 && scrollPosition < this.scrollThreshold3) {
        // Apply color for threshold 2
        this.renderer.setStyle(navbarElement, 'background', 'linear-gradient(to left, pink, pink)');
      } else if (scrollPosition >= this.scrollThreshold3) {
        // Apply color for threshold 3
        this.renderer.setStyle(navbarElement, 'background', 'linear-gradient(to left, #color5, #color6)');
      } else {
        // Default color
        this.renderer.setStyle(navbarElement, 'background', '');
      }
    }
  }

 


  


async login()   //calling the login from the main services
{
 await this.main.login()
}

async pricing()   //calling the login from the main services
{
 this.router.navigate(['pricing'])
}
async home()   //calling the login from the main services
{
 this.router.navigate(['home'])
}


}
