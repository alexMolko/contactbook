import { AppState } from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getContactState = createFeatureSelector<AppState>('contact');

export const getContacts = createSelector(getContactState, (state) => {
  return state.contact;
});