import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { NetComponent } from './net/net.component';
import { PayComponent } from './pay/pay.component';
import { DebitComponent } from './debit/debit.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes : Routes=[
  {path :'',component:CardComponent},
  {path :'net',component:NetComponent},
  {path :'pay',component:PayComponent},
  {path :'debit',component:DebitComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    NetComponent,
    PayComponent,
    DebitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
