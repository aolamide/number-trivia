import React, { Component } from 'react';
import Navbar from './Navbar';
import InputBox from './InputBox';
import 'tachyons';
import Fact from './Fact';
import Footer from './Footer';

class App extends Component {
	constructor(){
		super();
		this.state = {
			input: '',
			output : {}
		}
	}
	onInput = (e) => {
		this.setState({input : e.target.value})
	}

	onNumberSubmit = () => {
		if(this.state.input){
			fetch(`http://numbersapi.com/${this.state.input}?json`)
				.then(res => res.json())
				.then(data => this.setState({output : data}))
				.catch(err => console.log('oops', err))
		}
	}

	render() {
		return (
	    	<div>
				<Navbar />
	      		<InputBox onNumberSubmit={this.onNumberSubmit} onInput={this.onInput}/>
	      		<Fact factInfo={this.state.output} />
	      		<Footer />
	    	</div>
     
    	);
  	}
}

export default App;
