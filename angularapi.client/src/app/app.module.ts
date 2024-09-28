import { HttpClientModule } from '@angular/common/http';
import { computed, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FootarComponent } from './footar/footar.component';
import { ProductComponent } from './product/product.component';
import { AbutUsComponent } from './abut-us/abut-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    FootarComponent,
    ProductComponent,
    AbutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent , pathMatch: 'full' },
      { path: 'Aboutus', component: AbutUsComponent },
      { path: 'Categories', component: CategoriesComponent }

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
