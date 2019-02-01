import React, { Component } from 'react';
import Navbar from './Navbar';
import InputBox from './InputBox';
import 'tachyons';
import Fact from './Fact';
import Footer from './Footer';
import unirest from 'unirest';

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
		console.log(window.innerHeight)
	}

	onNumberSubmit = () => {
		if(this.state.input){
			unirest.get(`https://numbersapi.p.rapidapi.com/${this.state.input}/trivia?fragment=true&notfound=floor&json=true`)
				.header("X-RapidAPI-Key", "b62b8797dfmsh52097d608dcd3e9p1a6f7fjsnf243e1a0f149")
				.end(res => this.setState({output : res.body}));
		}
	}

	render() {
		return (
	    	<div>
				<Navbar />
	      		<InputBox onNumberSubmit={this.onNumberSubmit} onInput={this.onInput}/>
	      		<Fact factInfo={this.state.output} />
	      		<div style={{display:'flex', alignItems:'flex-end'}}>
	      			<Footer />
	      		</div>
	      		
	    	</div>
     
    	);
  	}
}

export default App;
