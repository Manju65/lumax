import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../pages/Dashboard/dashboard.component';
import { PageComponent } from '../page/page.component';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { ProductionComponent } from '../pages/production/production.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProductionComponent,

        // MainpageComponent,
        // PageComponent,

    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,

        ToastrModule.forRoot(),
        ModalModule.forRoot(),

    ],
    providers: [],

})
export class MainModule { }
