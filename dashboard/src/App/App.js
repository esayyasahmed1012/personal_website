import React from 'react';
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Body from '../Body/Body';
import Header from '../Header/Header';
import Exp from '../exp/Exp';
import Skills from '../Skills/Skills';
const App = () => {
	return (
		<div className="App">
			<Header />
			<Body />
			<Exp />
			{/* <Skills /> */}
		</div>
	)
}





export default App