import { Component,HostListener} from '@angular/core';




@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {

  shouldChangeBackground = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 2000;
    this.shouldChangeBackground = !(window.pageYOffset > scrollThreshold);
  }

}
