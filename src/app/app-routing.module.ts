import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from './contact-book/contact-list/contact-list.component';
import {ContactListComponent} from './contact-book/contact-list/contact-list.component';
import {ContactAddComponent} from './contact-book/contact-add/contact-add.component';
import {ContactDetailsComponent} from './contact-book/contact-details/contact-details.component';
const routes: Routes = [
	{
		path: '',
		component: ContactListComponent
	},
	{
		path: 'add',
		component: ContactAddComponent
	},
	{
		path: 'details/:id',
		component: ContactDetailsComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
