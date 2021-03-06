import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Contact } from '../../models/contact.model';
import { Observable} from 'rxjs';
import { getContacts } from '../store/contact.selector';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Contact[]>= new Observable<Contact[]>();
  selected: Contact= new Contact();
  id=1;
  showdetail: boolean=false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  	this.contacts=this.store.select(getContacts);
  }

  onSelected(contact:Contact){
  	this.selected=contact;
    this.id=contact.id;
    this.showdetail=true;
  }

}
