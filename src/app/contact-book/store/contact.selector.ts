import { AppState } from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getContactState = createFeatureSelector<AppState>('contact');

export const getContacts = createSelector(getContactState, (state) => {
  return state.contact;
});

export const getContactDetails = createSelector(getContactState, (state:any, props:any) => {
  return state.contact.find((contact:any) => contact.id === props.id);
});