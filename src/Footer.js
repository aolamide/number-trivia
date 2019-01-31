import React from 'react';

const Footer = () => {
	return (
		<div className='footer shadow-4' style={{display: 'flex'}}>
			<p style={{flex: '9'}}>Made with React with &hearts; by 
				<a target='_blank' rel="noopener noreferrer"  href="https://github.com/aolamide">Aboyeji Olamide</a>
			</p>
			<p style={{flex: '1', alignSelf:'center'}}>
	  			<a href='htts://github.com/aolamide'><i className='fab fa-github fa-2x '></i></a>
	  			<a href='htts://wa.me/+2348087723258'><i className='fab fa-whatsapp fa-2x'></i></a>
	  			<a href='htts://twitter.com/olamideaboyeji'><i className='fab fa-twitter fa-2x'></i></a>
  			</p>
  		</div>
	);
}

export default Footer;