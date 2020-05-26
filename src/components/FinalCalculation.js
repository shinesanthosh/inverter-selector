import React, { Component } from 'react';
import DeviceAdder from './DeviceAdder';

export default class FinalCalculation extends Component {
	state = {
		power: 0,
		pf: 0.7,
		va: 0,
		time: 3,
		volts: 12,
		ah: 0,
		step: 1,
		number: 1,
		data: [],
	};
	powerChanger = (pow, stepval, dat, num) => {
		this.setState(
			{
				power: pow,
				step: stepval,
				data: dat,
				number: num,
			},
			() => {
				let calVA = Math.ceil(this.state.power / this.state.pf);
				let calAH = Math.ceil(
					(this.state.power * this.state.time) / this.state.volts
				);
				this.setState({
					va: calVA,
					ah: calAH,
				});
			}
		);
	};

	textChangeHandler = (e) => {
		let val = Number(e.target.value);
		this.setState(
			{
				[e.target.name]: val,
			},
			() => {
				let calVA = Math.ceil(this.state.power / this.state.pf);
				let calAH = Math.ceil(
					(this.state.power * this.state.time) / this.state.volts
				);
				this.setState({
					va: calVA,
					ah: calAH,
				});
			}
		);
	};

	render() {
		if (this.state.step === 1) {
			return (
				<DeviceAdder
					changer={this.powerChanger}
					dat={this.state.data}
					num={this.state.number}
				/>
			);
		} else {
			return (
				<div className="content">
					<form>
						<label>Total power Requirement in Watts</label>
						<input
							type="number"
							placeholder="total power"
							name="power"
							value={this.state.power}
							onChange={(e) => {
								this.textChangeHandler(e);
							}}
						/>
						<label>Power Factor</label>
						<input
							type="number"
							placeholder="Power Factor"
							name="pf"
							value={this.state.pf}
							onChange={(e) => {
								this.textChangeHandler(e);
							}}
						/>

						<label>Battery Voltage in Volts</label>
						<input
							type="number"
							placeholder="Battery Voltage"
							name="volts"
							value={this.state.volts}
							onChange={(e) => {
								this.textChangeHandler(e);
							}}
						/>

						<label>Required Backup Time in Hrs</label>
						<input
							type="number"
							placeholder="Backup Time"
							name="time"
							value={this.state.time}
							onChange={(e) => {
								this.textChangeHandler(e);
							}}
						/>
						<br />
						<label>You Require: </label>
						<span id="va" className="box">
							{this.state.va} VA Inverter
						</span>
						<br />
						<label>And</label>
						<span id="va" className="box">
							{this.state.ah}AH Battery
						</span>
						<br />
						<div
							className="box"
							onClick={() => {
								this.setState({ step: 1 });
							}}
						>
							Back
						</div>
					</form>
				</div>
			);
		}
	}
}
