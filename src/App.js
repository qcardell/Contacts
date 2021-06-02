import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
//import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom'
import sortBy from 'sort-by'

 

class App extends Component {
	state={
		//contacts: []
		contacts: [
			{
				"id": "1",
				"name": "John",
				"email": "john@reactcontact.com",
				"avatarURL": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
			},
			{
				"id": "2",
				"avatarURL": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
				"email": "EnderGame@reactcontact.com",
				"name": "Orson Scott Card"

			},
			{
				"id": "3",
				"avatarURL": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
				"email": "1776@reactcontact.com",
				"name": "David McCullough"
			},
			{
				"id": "4",
				"avatarURL": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
				"email": "Harry PotterandtheSorcererStone@reactcontact.com",
				"name": "J.K. Rowling"
			},
			{
				"id": "5",
				"avatarURL": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
				"email": "TheHobbit@reactcontact.com",
				"name": "J.R.R. Tolkien"
			},
			{
				"id": "6",
				"avatarURL": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
				"email": "OhthePlacesYoullGo@reactcontact.com",
				"name": "Seuss"
			},
			{
				"id": "7",
				"avatarURL": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
				"email": "TheAdventuresofTomSawyer@reactcontact.com",
				"name": "Mark Twain"
			}
		]
	}
	componentDidMount(){
		//ContactsAPI.getAll().then((contacts) => {
		//	this.setState({contacts})
		//})
	}
	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		}))
		console.log(contact)
		//ContactsAPI.remove(contact)
	}
	
	createContact(contact){
		//ContactsAPI.create(contact).then(contact => {
		//	this.setState(state => ({
		//		contacts: state.contacts.concat([contact])
		//	}))
		//})
		console.log(contact)
		this.setState((state) => ({
			contacts: state.contacts.concat([contact]) 
		}))
	}
	render() {
		let tempcontact;
		tempcontact = this.state.contacts;
		tempcontact.sort(sortBy('id')).reverse();
		let maxid = Number(tempcontact[0].id) + 1;

		//let id = Number(this.props.name[0].id) + 1;
	return (
		<div className="app">
			<Route exact path="/" render={() => (
			<ListContacts 
				onDeleteContact={this.removeContact} 
				contacts={this.state.contacts}
			/>
		)}/>
			<Route path="/create" render={({ history }) => (
				<CreateContact
				id={maxid}
				onCreateContact={(contact) => {
					this.createContact(contact)
					history.push('/')
				}}
			/>
			)}/>
	  </div>
    )
  }
}

export default App;
