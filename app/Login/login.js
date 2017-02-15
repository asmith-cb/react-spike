import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 400px;
	margin: 0 auto;
`;

const SubmitButton = styled.button`
	width: 400px;
	height: 60px;
	background-color: #565656;
	border: none;
	margin-top: 10px;
	font-size: 20px;
	color: white;
`;

const Login = () => {
	return (
		<Wrapper>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" />
				<SubmitButton type="submit">Login</SubmitButton>
			</form>
		</Wrapper>
	);
}

export default Login;