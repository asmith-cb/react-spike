import React from 'react';
import styled from 'styled-components';
import logo from './logo-icon.jpg';

const Wrapper = styled.div`
	text-align: center;
`;

const Header = () => {
	return (
		<Wrapper>
			<img src={logo} width="150"/>
			<h1>myClosetbox</h1>
		</Wrapper>
	);
}

export default Header;
