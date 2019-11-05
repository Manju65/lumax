import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  previous;
  modalRef: BsModalRef;
  constructor(private cdRef: ChangeDetectorRef, private modalService: BsModalService,
  ) { }

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

    },
    {
      id: 2,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',

    },
    {
      id: 3,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',

    },
    {
      id: 4,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',

    },
    {
      id: 5,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',

    },


  ];
  headElements = ['Date/Time', 'Hopper Dryer Temp', 'MTC Temp Cavity', 'MTC Temp- core'];
  headElements1 = ['SI.No', 'Start Date', 'Start Time', 'End Date', 'End Time', 'Maintenance activity', 'Contact Name', 'Contact Number'];
  elements1: any = [
    {
      id: 1,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',

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

    },
    {
      id: 4,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',

    },
    {
      id: 5,
      heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',

    },


  ];
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.elements[id][property] = editField;
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
}
