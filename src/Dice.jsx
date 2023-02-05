import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
	render() {
		// let cls = `fa-solid fa-8x fa-dice-${this.props.face}  ${this.props.rolling ? "shaking" : ''} Dice`
		// ⭐ Yukarıdaki Şekilde Çalışıyor
		let cls = `fa-solid fa-8x fa-dice-${this.props.face}
		  ${this.props.rolling && 'shaking'}
		 Dice`

		return (
			// <i className="fas fa-8x fa-dice-one"></i>
			// <i className= `fa-solid fa-8x fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : ''} Dice` ></i >
			<>
				🍀 This Component Dice.jsx
				<i className={cls} ></i >
			</>

		)
	}
}
export default Dice


// import "./Dice.css"

// function Dice() {
// 	return (
// 		<div className='dicecomponent'>
// 			✅This Component Dice.jsx
// 		</div>
// 	)
// }

// export default Dice

