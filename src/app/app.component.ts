import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public numberOfPages: number = 5;
  public pageNumber: number = 1;
  constructor(private route: Router) {}
  ngOnInit() {
    for (let i = this.pageNumber; i <= this.numberOfPages; i++) {
      if (!sessionStorage.getItem(i.toString())) {
        sessionStorage.setItem(i.toString(), '');
      }
    }
    this.route.navigate(['page', this.pageNumber]);
  }
  onPreviousPage(): void {
    this.pageNumber = this.pageNumber - 1;
    this.route.navigate(['page', this.pageNumber]);
  }
  onNextPage(): void {
    this.pageNumber = this.pageNumber + 1;
    this.route.navigate(['page', this.pageNumber]);
  }
}
