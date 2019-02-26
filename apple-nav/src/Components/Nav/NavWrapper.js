import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';

const StyledNavWrapper = styled.div`
	width: 900px;
	color: white;
	height: 44px;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	margin: 0 60px;
`;

const StyledNavWrapperContainer = styled.div`
	width: 100%;
	background-color: #323232;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-content: center;
`;

const NavWrapper = (props) => {
	return (
		<div>
			<StyledNavWrapperContainer>
				<img
					src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
					alt="apple"
				/>
				<StyledNavWrapper>
					{props.data.map((d) => <Nav name={d.name} subLinks={d.subLinks} />)}
				</StyledNavWrapper>
				<img
					src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
					alt="search"
				/>
			</StyledNavWrapperContainer>
			{props.data.map((d) => (
				<Route path={`/${d.name}`} render={(props) => <SubNav {...props} subLinks={d.subLinks} />} />
			))}
		</div>
	);
};

export default NavWrapper;
