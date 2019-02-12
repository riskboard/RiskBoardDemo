import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/rb-header.scss';

export default () => {
	return (
		<header className="rb-header">
			<div className="rb-header-logo">
				<img src={`${process.env.PUBLIC_URL}/riskLogo.jpg`} />
			</div>
		</header>
	);
}