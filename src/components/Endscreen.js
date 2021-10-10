import React from "react";
import styled from "styled-components";
import ExitButton from "./styled/ExitButton";
import ModalContainer from "./styled/ModalContainer";

function Endscreen(props) {
	return (
		<ModalContainer>
			<Modal>
				<ExitButton onClick={props.exitModal} />
				<h1>Konfigurator servisa</h1>
				<br />
				<h3>Vaša prijava je uspješno poslana</h3>
				<br />
				<p>
					Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas
					u najkraćem mogućem roku. Hvala vam.
				</p>
				<br />
				<button onClick={props.exitModal}>Zatvori</button>
			</Modal>
		</ModalContainer>
	);
}

export default Endscreen;

const Modal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	padding: 15px 30px;
	max-width: 100%;
	border: 1px solid black;
	width: 50%;
	height: 35%;
	> h1 {
		margin: 0;
		align-self: center;
		font-size: 18px;
		font-weight: 500;
	}
	> h3 {
		font-size: 18px;
		font-weight: 500;
		margin-top: 50px;
		margin-bottom: 0;
	}

	> button {
		width: max-content;
		padding: 0 30px;
		align-self: center;
	}
	> p {
		width: 70%;
		text-align: center;
	}
`;
