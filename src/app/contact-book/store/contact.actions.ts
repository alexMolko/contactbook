import { createAction,props } from '@ngrx/store';
import { Contact } from '../../models/contact.model';

export enum ActionsContactsTypes{
	 ADD_CONTACT       = '[CONTACT] Add'
}
export const addContact = createAction(ActionsContactsTypes.ADD_CONTACT,props<{contact: Contact}> ());