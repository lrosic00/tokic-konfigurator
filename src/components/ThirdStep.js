import React from "react";
import styled from "styled-components";
import ExitButton from "./styled/ExitButton";
import ModalContainer from "./styled/ModalContainer";
import NavigationButtonContainer from "./styled/NavigationButtonContainer";

function ThirdStep(props) {
	return (
		<ModalContainer>
			<Modal>
				<ExitButton onClick={props.exitModal} />

				<h1>Konfigurator servisa</h1>
				<h3>Korak 3. Vaši kontakt podaci</h3>

				<InputFieldsContainer>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={props.values.fullName}
						onChange={props.handleData("fullName")}
						placeholder="Ime i prezime*"
					/>
					<input
						type="email"
						id="email"
						name="email"
						value={props.values.email}
						onChange={props.handleData("email")}
						placeholder="Email adresa*"
					/>
					<input
						type="number"
						id="phoneNo"
						name="phoneNo"
						value={props.values.phoneNo}
						onChange={props.handleData("phoneNo")}
						placeholder="Broj telefona*"
					/>
					<textarea
						type="text"
						id="note"
						name="note"
						value={props.values.note}
						onChange={props.handleData("note")}
						placeholder="Napomena (opcionalno)"
					/>
				</InputFieldsContainer>

				<hr />
				<NavigationButtonContainer>
					<button onClick={props.previousStep}>Nazad</button>
					<button
						disabled={
							!(
								props.values.fullName &&
								props.values.email &&
								props.values.phoneNo
							)
						}
						onClick={props.nextStep}
					>
						Dalje
					</button>
				</NavigationButtonContainer>
			</Modal>
		</ModalContainer>
	);
}

export default ThirdStep;

const Modal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-content: space-evenly;
	background-color: white;
	padding: 15px 30px;
	max-width: 100%;
	border: 1px solid black;
	width: 50%;
	height: 55%;
	min-height: 500px;
	> h1 {
		margin: 0;
		align-self: center;
		font-size: 18px;
		font-weight: 500;
	}
	> h3 {
		font-size: 18px;
		font-weight: 500;
		margin-top: 30px;
		margin-bottom: 15px;
	}

	> button {
		width: max-content;
		padding: 0 30px;
		align-self: flex-end;
	}

	> hr {
		/* margin-top: auto; */
		color: gray;
		width: 100%;
	}
`;

const InputFieldsContainer = styled.div`
	padding: 1em 2em;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: flex-start;
	max-width: 100%;
	align-self: center;
	height: 100%;
	> input,
	textarea {
		margin-top: 15px;
		width: 300px;
		border: 2px solid black;
		height: 20px;
		resize: none;
		padding: 0.2em;
	}
	#note {
		height: 50%;
	}
`;
// const InputFieldsContainer = styled.div`
// 	flex-grow: 2;
// 	padding: 0 3em;
// 	display: flex;
// 	justify-content: space-between;
// 	flex-wrap: wrap;

// 	> input,
// 	textarea {
// 		width: 40%;
// 		min-width: 20%;
// 		height: 20px;
// 		border: 3px solid black;
// 		resize: none;
// 	}
// 	#note {
// 	}
// `;
