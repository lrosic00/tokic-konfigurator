import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

function Jumbotron() {
	return (
		<Header>
			<LeftHeader>
				<img src={logo} alt="tokic logo" />
			</LeftHeader>
			<RightHeader>
				<h2>Konfigurator servisa</h2>
				<h4>Izračunajte trošak servisa</h4>
			</RightHeader>
		</Header>
	);
}

export default Jumbotron;

const Header = styled.div`
	display: flex;
	border-bottom: solid black 3px;
	padding: 10px 0;
`;

const LeftHeader = styled.div`
	padding-left: 100px;
	margin: auto 0;
	margin-right: 20px;
	> img {
		height: 70px;
	}
`;

const RightHeader = styled.div`
	> * {
		font-weight: 600;
	}
	> h2 {
		margin: 0;
		padding: 0;
	}
	> h4 {
		padding: 0;
		margin: 0;
		margin-top: 8px;
	}
`;
