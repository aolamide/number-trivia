import React from 'react';

const Fact = ({factInfo}) => {
	return (
		<div>
			<div className='ba b--blue bw1 grow pointer' style={{width: '80%', margin : '50px auto 0'}}>
				<p style={{minHeight: '10px'}} className='pa1 bg-pink f2'>{factInfo.number}</p>
				<p style={{minHeight: '100px'}} className='pa1 pl2 bg-black white f4'>{factInfo.text}</p>
			</div>
		</div>
	);
}

export default Fact;