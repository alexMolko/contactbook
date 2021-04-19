import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../../models/contact.model';
import { AppState } from '../../app.state';
import {addContact} from '../store/contact.actions';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
 
  name: string ="";
  lastname:string ="";
  phone: string="";
  email: string="";
  address: string="";
  constructor(private store: Store <AppState>, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
  	const contact= new Contact();
  	contact.Name=this.name;
  	contact.LastName=this.lastname;
    contact.Phone=this.phone;
  	contact.Email=this.email;
  	contact.Address=this.address;

  	this.store.dispatch(addContact({contact:contact}));
  	this.router.navigate(['/']);
  }
}
