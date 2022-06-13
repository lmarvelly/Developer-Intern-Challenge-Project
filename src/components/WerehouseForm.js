import React, { Component } from 'react';
import uuid from 'uuid';

class WerehouseForm extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			uuid: uuid(),
			werehouseName: '',
			database: []
		}
	}

	componentDidMount = () =>
	{

	}

	render()
	{
		return(
			<form onSubmit={this.onSubmit} className='form'>
				<input 
					id='werehouseName'
					className='text-input'
					value={this.state.werehouseName}
					onChange={this.onNameChange}
					placeholder='Item Name' 
					type="text" 
				/>
				<button className='button'>{this.props.werehouseName ? 'Edit Werehouse' : 'Add new Werehouse'}</button>
			</form>
		);
	}
}

export default WerehouseForm;