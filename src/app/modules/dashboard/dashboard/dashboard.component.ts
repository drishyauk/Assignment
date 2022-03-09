import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userMail: string = '';
  cardDetails: any = [
    {
      id:1,
      bookName: 'Book1',
      author: 'Author1',
      price: 200,
      rating: 4
    },
    {
      id:2,
      bookName: 'Book2',
      author: 'Author2',
      price: 100,
      rating: 2
    },
    {
      id:3,
      bookName: 'Book3',
      author: 'Author3',
      price: 250,
      rating: 1
    },
    {
      id:4,
      bookName: 'Book4',
      author: 'Author4',
      price: 300,
      rating: 4
    },
    {
      id:5,
      bookName: 'Book5',
      author: 'Author5',
      price: 290,
      rating: 5
    },
    {
      id:6,
      bookName: 'Book6',
      author: 'Author6',
      price: 340,
      rating: 4
    },
    {
      id:7,
      bookName: 'Book7',
      author: 'Author7',
      price: 400,
      rating: 3
    },
    {
      id:8,
      bookName: 'Book8',
      author: 'Author8',
      price: 320,
      rating: 4
    },
    {
      id:9,
      bookName: 'Book9',
      author: 'Author9',
      price: 150,
      rating: 2
    },
    {
      id:10,
      bookName: 'Book10',
      author: 'Author10',
      price: 130,
      rating: 2
    }
  ];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.activatedRoute.queryParams.subscribe((res: any) => {
this.userMail = res.mailID;
    })
  }

}
