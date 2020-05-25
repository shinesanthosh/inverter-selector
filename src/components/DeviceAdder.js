import React, { Component } from 'react';

export class DeviceAdder extends Component {
	state = {
		a: 10,
		b: 20,
		c: 30,
		d: 40,
		e: 50,
	};

	clickHandler = (e) => {
		e.preventDefault();
		let sum = 0;
		// eslint-disable-next-line
		Object.keys(this.state).map((i) => {
			sum += this.state[i];
		});

		// console.log('Sum:', sum);
		this.props.changer(sum, 2);
	};

	textChangeHandler = (e) => {
		this.setState({
			[e.target.name]: Number(e.target.value),
		});
	};
	render() {
		return (
			<div className="content">
				<form>
					<input
						type="number"
						name="a"
						onChange={(e) => {
							this.textChangeHandler(e);
						}}
						value={this.state.a}
					/>
					<input
						type="number"
						name="b"
						onChange={(e) => {
							this.textChangeHandler(e);
						}}
						value={this.state.b}
					/>
					<input
						type="number"
						name="c"
						onChange={(e) => {
							this.textChangeHandler(e);
						}}
						value={this.state.c}
					/>
					<input
						type="number"
						name="d"
						onChange={(e) => {
							this.textChangeHandler(e);
						}}
						value={this.state.d}
					/>
					<input
						type="number"
						name="e"
						onChange={(e) => {
							this.textChangeHandler(e);
						}}
						value={this.state.e}
					/>
					<div
						className="box"
						onClick={(e) => {
							this.clickHandler(e);
						}}
					>
						Done
					</div>
				</form>
			</div>
		);
	}
}

export default DeviceAdder;
