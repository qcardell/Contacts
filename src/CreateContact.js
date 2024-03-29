import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
//import sortBy from 'sort-by'

class CreateContact extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, {hash: true})
		if(this.props.onCreateContact)
			this.props.onCreateContact(values)
	}
	render(){
		//this.props.name.sort(sortBy('id')).reverse();
		//let id = Number(this.props.name[0].id) + 1;
		//console.log(this.props.id)
		return(
		<div>
			<Link className="close-create-contact" to="/">Close</Link>
			<form onSubmit={this.handleSubmit} className="create-contact-form">
				<ImageInput
					className="create-contact-avatar-input"
					name="avatarURL"
					values = "none"
					maxHeight={64}
				/>
				<div className="create-contact-details">
					<input type ="number"  style={{display: 'none'}} name="id" defaultValue={this.props.id} placeholder="id" readOnly={true}/>
					<input type="text" name="name" placeholder="Name"/>
					<input type="text" name="email" placeholder="Email"/>
					<button>Add Contact</button>
				</div>
			</form>
		</div>
		)
	}
}

export default CreateContact