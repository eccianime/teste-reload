import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from './components/Avatar';

function App() {
	return (
		<Container><Row className="justify-content-center text-center">
			<Col sm={12} md={6} className="simple-card">
				<h1>Avatar Test</h1>
			</Col>
			<Col sm={12} md={6} className="simple-card">
				<Avatar />
			</Col>
		</Row></Container>
	);
}

export default App;
