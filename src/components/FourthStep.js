import React from "react";
import styled from "styled-components";
import ExitButton from "./styled/ExitButton";
import ModalContainer from "./styled/ModalContainer";
import NavigationButtonContainer from "./styled/NavigationButtonContainer";

function FourthStep(props) {
	const services = Object.values(props.values.services);
	const renderServices = services.map((item) =>
		item.isChosen ? (
			<>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<li>{item.name}</li>
					<span>{item.price.toFixed(2)} KN</span>
				</div>
			</>
		) : null
	);

	return (
		<ModalContainer>
			<Modal>
				<ExitButton onClick={props.exitModal} />
				<h1>Konfigurator servisa</h1>
				<h3>Korak 4. Pregled i potvrda vašeg odabira</h3>
				<p>
					Molimo vas da još jednom pregledate i potvrdite unesene podatke.
					Ukoliko želite promijeniti neki od podatka, možete pritisnuti gumb za
					uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili
					ispravnost svojih podataka pritisnite gumb pošalji na dnu za slanje
					upita za servis
				</p>
				<RowContainer>
					<ColumnContainer>
						<ColumnHeader>
							<h1>MODEL VOZILA</h1>
							<button onClick={() => props.goToStep(1)}>Uredi</button>
						</ColumnHeader>
						<ColumnBody>{props.values.carBrand}</ColumnBody>
					</ColumnContainer>
					<ColumnContainer>
						<ColumnHeader>
							<h1>ODABRANE USLUGE</h1>
							<button onClick={() => props.goToStep(2)}>Uredi</button>
						</ColumnHeader>
						<ColumnBody>
							{renderServices}
							<br />
							{props.values.hasValidCoupon && (
								<div style={{ display: "flex", justifyContent: "flex-end" }}>
									Popust (30%):
									<span> -{(props.values.price * 0.3).toFixed(2)} KN</span>
								</div>
							)}

							<div style={{ display: "flex", justifyContent: "flex-end" }}>
								UKUPNO:{" "}
								<span style={{ fontWeight: "bold" }}>
									{props.values.hasValidCoupon
										? (props.values.price * 0.7).toFixed(2)
										: props.values.price.toFixed(2)}{" "}
									KN
								</span>
							</div>
						</ColumnBody>
					</ColumnContainer>
				</RowContainer>

				<hr />
				<RowContainer>
					<ColumnContainer>
						<ColumnHeader>
							<h1>KONTAKT PODACI</h1>
							<button onClick={() => props.goToStep(3)}>Uredi</button>
						</ColumnHeader>
						<ColumnBody>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								Ime i prezime: <span>{props.values.fullName}</span>
							</div>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								Broj telefona: <span>{props.values.phoneNo}</span>{" "}
							</div>
						</ColumnBody>
					</ColumnContainer>
					<ColumnContainer>
						<ColumnBody style={{ justifyContent: "flex-end" }}>
							<br />
							<br />
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								Email adresa: <span>{props.values.email}</span>
							</div>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								Napomena:
								<span
									style={{
										maxHeight: "20ex",
										overflow: "auto",
										width: "55%",
										textAlign: "end",
										paddingRight: "1em",
										marginRight: "-1em",
										wordBreak: "break-word",
									}}
								>
									{props.values.note}
								</span>
							</div>
						</ColumnBody>
					</ColumnContainer>
				</RowContainer>

				<hr />
				<NavigationButtonContainer>
					<button onClick={props.previousStep}>Nazad</button>
					<button onClick={props.nextStep}>Dalje</button>
				</NavigationButtonContainer>
			</Modal>
		</ModalContainer>
	);
}

export default FourthStep;

const RowContainer = styled.div`
	display: flex;
	justify-content: space-between;
	* {
		font-size: 14px;
	}
	width: 100%;
	margin-bottom: 1em;
	@media only screen and (max-width: 1000px) {
		flex-wrap: wrap;
	}
	button {
		cursor: pointer;
	}
`;
const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 100%;

	margin-right: 1em;
	> button {
		height: 10px;
	}
`;
const ColumnBody = styled.div`
	/* align-items: flex-end; */
	> span {
		/* float: right; */
	}
	li {
		display: inline;
	}
	> div {
		margin-top: 0.4em;
	}
`;
const ColumnHeader = styled.div`
	display: flex;
	/* height: 100%; */
	flex-wrap: wrap;
	margin-bottom: 1em;
	* {
		padding: 0;
		margin: 0;
		margin-right: 1em;
	}
	> h1 {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0.5px;
	}
	> button {
		font-size: 13px;
		padding: 0 0.7em;
	}
`;

const Modal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 15px 30px;
	max-width: 100%;
	border: 1px solid black;
	width: 50%;
	min-height: 45%;
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
		margin-bottom: 0px;
	}
	> p {
		font-size: 14px;
		margin-top: 0.5em;
		margin-bottom: 2em;
	}

	> button {
		width: max-content;
		padding: 10px 30px;
		align-self: flex-end;
	}

	> hr {
		/* margin-top: auto; */
		color: gray;
		width: 100%;
	}
`;
