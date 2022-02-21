//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="Clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="Six">{props.digitSix % 10}</div>
			<div className="Five">{props.digitFive % 10}</div>
			<div className="Four">{props.digitFour % 10}</div>
			<div className="Three">{props.digitThree % 10}</div>
			<div className="Two">{props.digitTwo % 10}</div>
			<div className="One">{props.digitOne % 10}</div>
			<div className="AllBttns position-absolute top-20 start-20 translate-bottom"></div>
		</div>
	);
}

/* PREGUNTAR COMO DARLE LA FUNCIONALIDAD A LOS BOTONES Y COMO HACER EL RESTO DE LOS DESAFIOS  */

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

let Counter = 0;
setInterval(function() {
	const six = Math.floor(Counter / 100000);
	const five = Math.floor(Counter / 10000);
	const four = Math.floor(Counter / 1000);
	const three = Math.floor(Counter / 100);
	const two = Math.floor(Counter / 10);
	const one = Math.floor(Counter / 1);
	Counter++;

	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
