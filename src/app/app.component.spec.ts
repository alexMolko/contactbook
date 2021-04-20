import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-book/contact-list/contact-list.component';
import { ContactAddComponent } from './contact-book/contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-book/contact-details/contact-details.component';
import {StoreModule} from '@ngrx/store';
import {contactReducer} from './contact-book/store/contact.reducer';
import {FormsModule} from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
      contact: contactReducer
      }),
      FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ContactListComponent,
        ContactAddComponent,
        ContactDetailsComponent

      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'contact-book'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contact-book');
  });


});
