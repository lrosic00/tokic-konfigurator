import React from "react";
import styled from "styled-components";
import ExitButton from "./styled/ExitButton";
import ModalContainer from "./styled/ModalContainer";
import NavigationButtonContainer from "./styled/NavigationButtonContainer";

function FirstStep(props) {
	const carBrandArray = [
		"Peugeot",
		"Volkswagen",
		"Citroen",
		"Audi",
		"Bmw",
		"Seat",
		"Alfa Romeo",
		"Kia",
		"Hyundai",
		"Honda",
		"Toyota",
	];

	return (
		<ModalContainer>
			<Modal>
				<ExitButton onClick={props.exitModal} />
				<h1>Konfigurator servisa</h1>
				<h3>Korak 1. Odaberite proizvođača vašeg vozila</h3>
				<CarBrandContainer>
					{carBrandArray.map((item) => (
						<label for={item}>
							<input
								type="radio"
								id={item}
								name="car_brand"
								value={item}
								onChange={props.handleData("carBrand")}
								defaultChecked={props.values.carBrand === item}
							/>
							{item}
						</label>
					))}
				</CarBrandContainer>

				<hr />
				<NavigationButtonContainer>
					<button disabled={!props.values.carBrand} onClick={props.nextStep}>
						Dalje
					</button>
				</NavigationButtonContainer>
			</Modal>
		</ModalContainer>
	);
}

export default FirstStep;

const Modal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 15px 30px;
	max-width: 100%;
	border: 1px solid black;
	width: 50%;
	height: 35%;
	min-height: 300px;
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
		margin-bottom: 30px;
	}

	> button {
		width: max-content;
		padding: 0 30px;
		align-self: flex-end;
	}

	> hr {
		margin-top: auto;
		color: gray;
		width: 100%;
	}
`;

const CarBrandContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	> label {
		margin-right: 20px;
		width: 90px;
		font-size: 12px;
		font-weight: 500;
	}
`;
