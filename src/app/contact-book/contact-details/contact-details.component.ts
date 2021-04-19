import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { AppState } from '../../app.state';
import { getContactDetails } from '../store/contact.selector'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact : Contact= new Contact();
  
  constructor(private store: Store, private _Activatedroute:ActivatedRoute) {
  	this._Activatedroute.paramMap.subscribe(params=>{
  		const id= Number(params.get('id'));
  		this.store.select(getContactDetails,{id}).subscribe((data)=>{
  			this.contact=data;
  		})
  	})
  }

  ngOnInit(): void {
  }

}
