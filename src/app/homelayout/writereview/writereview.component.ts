import { Component,AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { OwlOptions  } from 'ngx-owl-carousel-o';
declare const mycarousal: any;
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-writereview',
  templateUrl: './writereview.component.html',
  styleUrls: ['./writereview.component.css']
})
export class WritereviewComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  error:any
  happy:any
  unhappy:any
  showReviewForm: boolean = false;
  reviewForm!: FormGroup;
  reviews:any

  constructor(private formBuilder: FormBuilder,private http:HttpClient) {}


  showForm() {
  
   
    this.showReviewForm = true;
  }

  hideForm() {
    this.showReviewForm = false;
  }
  ngOnInit() {
    mycarousal()
    
    this.fetchReviews();
    this.reviewForm = this.formBuilder.group({
      name: ['', Validators.required],
      rating: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }




  fetchReviews() {  
    this.http.get<any[]>('https://encodedbackend.vercel.app/api/auth/latestreviews').subscribe(
      (response:any) => {
        this.reviews = response;
        console.log(this.reviews)
      },
      (error:any) => {
        console.log('Error retrieving reviews:', error);
      }
    );
  }

  // Submit form function
  onSubmit() {
    
    if (this.reviewForm.invalid) {
      this.error= true
      setTimeout(() => {
        this.error=false
      }, 600);
      return;
    }

    // Access the form values
    const name = this.reviewForm.controls['name'].value;
    const rating = this.reviewForm.controls['rating'].value;
    const feedback = this.reviewForm.controls['feedback'].value;

    const reviews = {
      name:name,
      rating:rating,
      feedback:feedback
    }
    this.http.post<any>('https://encodedbackend.vercel.app/api/auth/sendreview', reviews)
    .subscribe(
      (response) => {
        this.happy= true
      setTimeout(() => {
        this.happy=false
      }, 1200);
        // Add any further actions or notifications here
      },
      (error) => {
        this.unhappy= true
        setTimeout(() => {
          this.unhappy=false
        }, 1200);
        // Handle the error appropriately
      }
    );
    this.reviewForm.reset();
  }
  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

