import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ContactListComponent } from './contact-list.component';
import {StoreModule} from '@ngrx/store';
import {contactReducer} from '../../contact-book/store/contact.reducer';
import { RouterModule } from '@angular/router';
import { AppState } from '../../app.state';
import {getContacts} from '../store/contact.selector';
import { By } from '@angular/platform-browser';
describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockStore<AppState>;
  let contactSelector;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ ContactListComponent ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    const initialState={
      contact:[
         { id: 1, Name: 'Carlos', LastName: 'Maya' , Phone:'+52 55 18 45 14', Email:'carlos@gmail.com', Address:'false street 212' },
        { id: 2, Name: 'Lukas', LastName: 'Bittner',Phone:'+52 55 25 47 68', Email:'lukas@gmail.com', Address:'false street 897' }
        ]
     };

  contactSelector=store.overrideSelector(getContacts,initialState.contact);
     fixture.detectChanges();
      spyOn(store, 'dispatch').and.callFake(() => {});
  });

   it('should render a contact list', () => {
    expect(
      fixture.debugElement.queryAll(By.css('.list-contacts')).length
    ).toBe(2);
   });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
