import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ContactAddComponent } from './contact-add.component';
import { AppState } from '../../app.state';
import {StoreModule} from '@ngrx/store';
import {addContact, ActionsContactsTypes} from '../store/contact.actions';
import {contactReducer} from '../../contact-book/store/contact.reducer';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Contact } from '../../models/contact.model';
import { OnInit } from '@angular/core';
describe('ContactAddComponent', () => {
  let component: ContactAddComponent;
  let fixture: ComponentFixture<ContactAddComponent>;
  let store: MockStore<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        RouterModule.forRoot([]),
        FormsModule
      ],
      declarations: [ ContactAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should dispatch the addContact action when onSubmit is invoked', () => {
    const contact= new Contact();
    const spy = spyOn(store, 'dispatch');
    fixture.detectChanges();
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(
      addContact({contact})
    );
    expect(addContact({contact}).contact).toBe(contact);
    expect(addContact({contact}).type).toBe(ActionsContactsTypes.ADD_CONTACT);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
