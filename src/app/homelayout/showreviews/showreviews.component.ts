import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-showreviews',
  templateUrl: './showreviews.component.html',
  styleUrls: ['./showreviews.component.css']
})
export class ShowreviewsComponent {
reviews:any

constructor(private http:HttpClient){}
loading:any

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchReviews()
    
  }
  fetchReviews() {  
    this.loading = true
    this.http.get<any[]>('http://localhost:1220/auth/allreviews').subscribe(
      (response:any) => {
        this.reviews = response;
        console.log(this.reviews)
        this.loading = false
      },
      (error:any) => {
        console.log('Error retrieving reviews:', error);
      }
    );
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
