import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        LoginRoutingModule,
        FormsModule, ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
