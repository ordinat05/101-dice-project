import React, { Component } from 'react'
import Dice from './Dice.jsx'
import './RollDice.css'

class RollDice extends Component {

	static defaultProps = {
		sides: ["one", "two", "three", "four", "five", "six"]
	}

	state = { dice1: "one", dice2: "two" }

	render() {
		return (
			<div className='RollDice'>
				<div className='RollDice-container'>
					<Dice face={this.state.dice1} />
					<Dice face={this.state.dice2} />
				</div>
				<button>SHAKE</button>
			</div>
		)
	}
}
export default RollDice


// function RollDice() {
// 	return (
// 		<div className='RollDiceComponent'>
// 			🍀 This Component RollDiceComponent
// 		</div>
// 	)
// }

// export default RollDice
