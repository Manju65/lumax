import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downtime',
  templateUrl: './downtime.component.html',
  styleUrls: ['./downtime.component.scss']
})
export class DowntimeComponent implements OnInit {
  public show: boolean = false;
  public show1: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  headElements = ['Down time start', 'Down time end', 'Duration', 'Category', 'Remark'];
  toggle() {
    this.show = !this.show;
  }
  toggle1() {
    this.show1 = !this.show1;

  }
}
