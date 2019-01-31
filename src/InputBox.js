import React from 'react';

const style = {
	display : 'flex',
	justifyContent: 'center'
}

const InputBox = ({onInput, onNumberSubmit}) => {
	return(
		<div style={style} className='mt5'>
			<div className='form' >
		        <input placeholder='your number here...' onChange={onInput} className=" bw2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 center" type="number" />
				<button onClick={onNumberSubmit} className=' pointer mt2 pa2 br2 shadow-5 grow '>Give me a fact!</button>
			</div>
		</div>
	)
}


export default InputBox;