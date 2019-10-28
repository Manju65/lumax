import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PagesComponent } from './pages/pages.component';
import { PageComponent } from './page/page.component';
// import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainModule } from './modules/all.module';
// import { LoginComponent } from './main-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // PagesComponent,
    PageComponent,
    // FooterComponent,
    // LoginComponent,
    MainpageComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
