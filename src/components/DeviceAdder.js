import React, { Component } from 'react';
const { random } = require('../functions/funcs');

export class DeviceAdder extends Component {
	state = {
		inputNumber: 5,
		data: {},
		try: 1,
	};

	clickHandler = (e) => {
		e.preventDefault();
		let sum = 0;
		// eslint-disable-next-line
		for (let key in this.data) {
			sum += this.data[key].value;
		}
		// console.log('Sum:', sum);
		this.props.changer(sum, 2, this.data, this.state.inputNumber);
	};

	textChangeHandler = (e) => {
		this.data[Number(e.target.id)].value = Number(e.target.value);
		this.forceUpdate();
	};

	data = this.props.dat;

	render() {
		// console.log('Props::', this.props);
		if (this.state.try === 1) {
			this.setState({
				inputNumber: this.props.num,
				try: 2,
			});
		}
		let inpArray = [];
		for (let i = 0; i < this.state.inputNumber; i++) {
			if (this.data[i] === undefined) {
				let rnd = random(4);
				this.data[i] = { name: rnd, value: 10 };
			}

			inpArray.push(
				<input
					type="number"
					id={i}
					name={this.data[i].name}
					value={this.data[i].value}
					onChange={(e) => {
						this.textChangeHandler(e);
					}}
				/>
			);
		}

		return (
			<div className="content">
				<form>
					<label>Enter the deivce power in Watts</label>
					{inpArray}
					<div
						className="box"
						onClick={(e) => {
							this.clickHandler(e);
						}}
					>
						Done
					</div>
					<div
						className="box"
						onClick={() => {
							this.setState({
								inputNumber: this.state.inputNumber + 1,
							});
						}}
					>
						Add device
					</div>
				</form>
			</div>
		);
	}
}

export default DeviceAdder;
