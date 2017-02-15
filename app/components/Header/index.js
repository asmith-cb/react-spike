import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	text-align: center;
`;

const Header = () => {
	return (
		<Wrapper>
			<img src="app/assets/logo-icon.jpg" width="150"/>
			<h1>myClosetbox</h1>
		</Wrapper>
	);
}

export default Header;
