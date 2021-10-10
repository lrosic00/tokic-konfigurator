import styled from "styled-components";

const ExitButton = styled.a`
	position: absolute;
	right: 10px;
	top: 10px;
	width: 32px;
	height: 32px;
	opacity: 1;
	cursor: pointer;
	&:before,
	&:after {
		position: absolute;
		left: 15px;
		content: " ";
		height: 33px;
		width: 7px;
		background-color: black;
		border-radius: 1px;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`;
export default ExitButton;
