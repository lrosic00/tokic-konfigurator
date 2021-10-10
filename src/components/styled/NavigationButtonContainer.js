import styled from "styled-components";

const NavigationButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	> button {
		width: max-content;
		padding: 2px 30px;
		margin-left: 10px;
	}

	> button:hover {
		cursor: pointer;
	}
	> button:disabled {
		opacity: 0.8;
		cursor: default;
	}
`;

export default NavigationButtonContainer;
