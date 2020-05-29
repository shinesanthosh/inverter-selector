import React, { Component } from 'react';

export class PowerInput extends Component {
	state = {
		disabled: true,
		val: 10,
		deviceName: '',
		tryno: 1,
		times: 1,
	};

	deviceDetails = [
		{ deviceName: 'Reading Lamp', devicePower: 10 },
		{ deviceName: 'Fan', devicePower: 65 },
		{ deviceName: 'Home Theatre', devicePower: 100 },
		{ deviceName: 'Ceiling Light', devicePower: 40 },
	];

	updateState = () => {
		this.props.changeHandler(
			this.props.id,
			this.state.val,
			this.state.deviceName,
			this.state.times
		);
	};

	timesChangeHandler = (e) => {
		this.setState({ times: e.target.value }, this.updateState);
	};

	changeHandler = (e) => {
		this.setState({ val: e.target.value }, this.updateState);
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
		this.setState({ val: pow, deviceName: devname }, this.updateState);
	};

	render() {
		if (this.state.tryno === 1) {
			this.setState({
				val: this.props.value,
				tryno: 2,
				deviceName:
					this.props.devname === undefined
						? this.deviceDetails[0].deviceName
						: this.props.devname,
				times: this.props.times === undefined ? '1' : this.props.times,
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
					value={this.state.deviceName}
				>
					{deviceArray}
				</select>
				<input
					type="number"
					className="text"
					id={this.props.id}
					name={this.props.name}
					value={this.state.val}
					onChange={(e) => {
						this.changeHandler(e);
					}}
				/>
				<label> X</label>
				<input
					type="number"
					value={this.state.times}
					onChange={(e) => {
						this.timesChangeHandler(e);
					}}
				/>
			</div>
		);
	}
}

export default PowerInput;
