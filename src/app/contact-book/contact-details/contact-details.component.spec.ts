import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';
import {StoreModule} from '@ngrx/store';
import {contactReducer} from '../../contact-book/store/contact.reducer';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { By } from '@angular/platform-browser';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
        contact: contactReducer
        }),
        RouterModule.forRoot([])
      ],
      declarations: [ ContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    component.contact = {
      id: 1,
      Name: 'Xani',
      LastName: 'Miranda',
      Phone: "554 45242 ",
      Email: "xani@gmail.com",
      Address: "Testing Address"
    };
    fixture.detectChanges();
  });
    
  it('should create', () => {
    expect(component).toBeTruthy();
    });
  
  it('should show contact details for a specific contact', () => {

    fixture.detectChanges();

    const nameElement: HTMLElement = fixture.debugElement.query(
      By.css('.contactName')
    ).nativeElement;

    expect(nameElement.innerText).toContain("Xani");
  });
});
