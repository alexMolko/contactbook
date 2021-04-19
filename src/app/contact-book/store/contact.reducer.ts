import { Contact } from '../../models/contact.model';
import {createReducer,on} from '@ngrx/store';
import  {addContact } from './contact.actions';

const initialState={
	contact:[
 		{ id: 1, Name: 'Carlos', LastName: 'Maya' , Phone:'+52 55 18 45 14', Email:'carlos@gmail.com', Address:'false street 212' },
    	{ id: 2, Name: 'Lukas', LastName: 'Bittner',Phone:'+52 55 25 47 68', Email:'lukas@gmail.com', Address:'false street 897' },
    	{ id: 3, Name: 'Ola', LastName: 'Gawlikowska',Phone:'+52 55 21 35 87', Email:'ola@gmail.com', Address:'false street 214' },
	]
};

const _contactReducer= createReducer(
	initialState,
	on(addContact, (state,action)=> {
		let contact={...action.contact};
		contact.id=(state.contact.length + 1);
		return {
			...state, contact: [...state.contact,contact]
		}
	})
	);

export function contactReducer(state:any,action:any) {
	return _contactReducer(state,action);
}