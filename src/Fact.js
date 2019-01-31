import React from 'react';

const Fact = ({factInfo}) => {
	return (
		<div>
			<div className='ba br3 b--blue bw1 grow pointer' style={{minWidth: '400px', maxWidth: '700px', margin : '50px auto'}}>
				<p className='pa2 bg-pink f2'>{factInfo.number}</p>
				<p className='pa5 bg-black white f4'>{factInfo.text}</p>
			</div>
		</div>
	);
}

export default Fact;