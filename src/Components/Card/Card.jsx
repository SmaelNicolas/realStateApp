import React from "react";

import "./card.css";

export const Card = () => {
	return (
		<div className='card--container'>
			<img
				className='card--image'
				src='https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
				alt='img state'
			/>
			<div className='card--price'>Price</div>
			<h3 className='card--title'>Title</h3>
			<h5 className='card--adress'>Adress</h5>
			<div className='card--meters'>m2</div>
			<div className='card--dorms'>2 Habs.</div>
			<div className='card--baths'>1 Baño/s</div>
			<div className='card--garage'>cochera</div>
			<div className='card--outside'>patio</div>
			<div className='card--description'>comentarios</div>
			<button className='card--favs'>Favorito</button>
			<button className='card--buy'>Comprar</button>
		</div>
	);
};
