import React, { Component } from 'react';

export class PowerInput extends Component {
	state = {
		disabled: true,
		val: 10,
		deviceName: '',
		tryno: 1,
	};

	deviceDetails = [
		{ deviceName: 'Reading Lamp', devicePower: 10 },
		{ deviceName: 'Fan', devicePower: 65 },
		{ deviceName: 'Home Theatre', devicePower: 100 },
		{ deviceName: 'Ceiling Ligt', devicePower: 40 },
	];

	changeHandler = (e) => {
		this.setState(
			{
				val: e.target.value,
			},
			() => {
				this.props.changeHandler(this.props.id, this.state.val);
			}
		);
	};

	powerChangeHandler = (e) => {
		let pow = 0,
			devname;
		// eslint-disable-next-line
		this.deviceDetails.map((value) => {
			if (e.target.value === value.deviceName) {
				pow = value.devicePower;
				devname = e.target.value;
			}
		});
		this.setState({ val: pow, deviceName: devname }, () => {
			this.props.changeHandler(
				this.props.id,
				this.state.val,
				this.state.deviceName
			);
		});
	};

	render() {
		if (this.state.tryno === 1) {
			this.setState({
				val: this.props.value,
				tryno: 2,
			});
		}

		const deviceArray = [];

		for (let i = 0; i < this.deviceDetails.length; i++)
			deviceArray.push(
				<option key={i}>{this.deviceDetails[i].deviceName}</option>
			);
		deviceArray.push(<option key="u">Other</option>);
		return (
			<div>
				<label>Device {this.props.id + 1}</label>
				<select
					onChange={(e) => {
						this.powerChangeHandler(e);
					}}
					value={this.props.devname}
				>
					{deviceArray}
				</select>
				<input
					type="number"
					id={this.props.id}
					name={this.props.name}
					value={this.state.val}
					onChange={(e) => {
						this.changeHandler(e);
					}}
				/>
			</div>
		);
	}
}

export default PowerInput;
