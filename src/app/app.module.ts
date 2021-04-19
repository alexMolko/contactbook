import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-book/contact-list/contact-list.component';
import { ContactAddComponent } from './contact-book/contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-book/contact-details/contact-details.component';

import {contactReducer} from './contact-book/store/contact.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactAddComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      contact: contactReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
