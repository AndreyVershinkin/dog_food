import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
			</div>
		)
	}
}

const emotion = [
	{ smile: "=)", descr: "Ы" },
	{ smile: "O_o", descr: "Ооо.." },
	{ smile: "^_^", descr: "Ммм Ня" },
	{ smile: "=(", descr: "Уф" }
]

ReactDOM.render(
	<div className="wrapper">
		{/* v.1 */}
		{/* <div className="card">=)</div>
		<div className="card">O_o</div>
		<div className="card">^_^</div>
		<div className="card">=(</div> */}
		{/* v.2 */}
		{/* <Card smile="=)" text="Ы" />
		<Card smile="O_o" text="Ооо.." />
		<Card smile="^_^" text="Ммм Ня" />
		<Card smile="=(" text="Уф" /> */}

		{/* {emotion.map((el, i) => <Card smile={el.smile} text={el.descr} key={i} />)} */}
	</div>,
	document.querySelector("#root")
)
