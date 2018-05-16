import React from 'react';

export default props => (
	<section>
		<div className="container">
			<h2>{props.title}</h2>
			{props.children}
		</div>
	</section>
);
