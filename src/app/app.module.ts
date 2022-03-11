import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { FoodAndBeverageComponent } from './food-beverage/food-and-beverage.component';
import { RestaurantsComponent } from './food-beverage/restaurants/restaurants.component';
import { ExcursionsComponent } from './life-style/excursions/excursions.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { ResortComponent } from './life-style/resort/resort.component';
import { WellnessAndSpaComponent } from './life-style/wellness-and-spa/wellness-and-spa.component';
import { MaterialModule } from './material/material.module';
import { OffersComponent } from './offers/offers.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    RestaurantsComponent,
    BarsComponent,
    LifeStyleComponent,
    WellnessAndSpaComponent,
    ResortComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    OffersComponent,
    CelebrationsComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
