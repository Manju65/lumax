import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  editField: string;
  elements: any = [
    {
      id: 1,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 2,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 3,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
  ];
  headElements = ['Hours', 'Component Name', 'Comp . Wt(gm)', 'No. of cavity', 'Cycle time', 'Prod/Hr', 'Rejection', 'Accepted prod', 'Total prod'];
  rej: any = [
    {
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
  ];
  rejection = ['Hours', 'Component Name', 'Start up', 'Power cut', 'Short mould', 'Shrinkage', 'Fleshes', 'Black spots', 'Total'];


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.elements[id][property] = editField;
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
