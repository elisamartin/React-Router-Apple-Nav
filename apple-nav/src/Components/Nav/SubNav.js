import React from 'react';
import styled from 'styled-components';

const StyledSubNav = styled.div`
	width: 50%;
	color: black;
	background-color: rgba(242, 242, 242, 0.7);
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	padding-top: 50px;
	font-size: 11px;
`;

const StyledSubNavContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgba(242, 242, 242, 0.7);
`;

const SubItem = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const SubNav = (props) => {
	return (
		<StyledSubNavContainer>
			<StyledSubNav>
				{props.subLinks.map((sub) => (
					<SubItem key={sub.name}>
						<img src={sub.img} alt={sub.name} />
						<p>{sub.name}</p>
					</SubItem>
				))}
			</StyledSubNav>
		</StyledSubNavContainer>
	);
};

export default SubNav;
