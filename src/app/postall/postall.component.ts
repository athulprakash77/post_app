import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postall',
  templateUrl: './postall.component.html',
  styleUrls: ['./postall.component.css']
})
export class PostallComponent implements OnInit {

  constructor(private api:ApiService ) {this.datafromApi() }

datafromApi=()=>{
  this.api.fetchpost().subscribe(
    (Response)=>{
      this.post=Response
    }
  )
}


  post: any=[ ]

  

  ngOnInit(): void {
  }

}
