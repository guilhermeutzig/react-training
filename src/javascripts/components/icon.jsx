import React from 'react';

export default props => (
	<a href={props.link} title={props.icon} className={`icon ${props.color}`}>
		<span className={props.icon} />
	</a>
);
