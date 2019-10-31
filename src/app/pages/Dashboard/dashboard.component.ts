import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }
  goto() {
    this.router.navigate(['/mainpage/production'])

  }
  Down() {
    this.router.navigate(['/mainpage/downtime'])

  }
  Maint() {
    this.router.navigate(['/mainpage/maintenance'])

  }
}
