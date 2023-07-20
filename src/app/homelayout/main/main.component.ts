import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as Aos from 'aos'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}
loading:any
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    });

    Aos.init()
  }

  ngAfterViewInit(): void {
    this.loading= false
  }

}
