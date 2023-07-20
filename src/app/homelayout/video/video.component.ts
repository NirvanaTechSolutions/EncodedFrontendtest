import { Component,ViewChild, ElementRef, AfterViewInit, HostListener  } from '@angular/core';
declare const myCustomFunction: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     myCustomFunction();
  }

}
