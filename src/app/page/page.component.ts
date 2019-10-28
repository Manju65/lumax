import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {


  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
