import React, { useState } from "react";
import styled from "styled-components";
import ExitButton from "./styled/ExitButton";
import ModalContainer from "./styled/ModalContainer";
import NavigationButtonContainer from "./styled/NavigationButtonContainer";

function SecondStep(props) {
	const services = Object.values(props.values.services);

	const validCoupon = "Tokić123";
	const [correctCouponEntered, setCorrectCouponEntered] = useState(false);
	const [enteredCoupon, setEnteredCoupon] = useState("");
	const [showCouponField, setShowCouponField] = useState(false);
	const [checkedState, setCheckedState] = useState(
		services.map((val) => {
			return val.isChosen;
		})
	);
	console.log(checkedState);
	const [total, setTotal] = useState(0);
	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);

		setCheckedState(updatedCheckedState);
		const totalPrice = updatedCheckedState.reduce(
			(sum, currentState, index) => {
				if (currentState === true) {
					return sum + services[index].price;
				}
				return sum;
			},
			0
		);
		console.log(totalPrice);
		// props.applyPrice(totalPrice);
		setTotal(totalPrice);
		props.setPrice(totalPrice);
		props.chosenService(position);
	};
	const handleEnteredCoupon = (e) => {
		setEnteredCoupon(e.target.value);
	};
	const handleSubmitCoupon = (e) => {
		if (enteredCoupon === validCoupon) {
			const something = {
				target: {
					value: true,
				},
			};
			props.handleData("hasValidCoupon")(something);
			setCorrectCouponEntered(true);
		} else {
			alert("Invalid coupon");
		}
		e.preventDefault();
	};

	return (
		<ModalContainer>
			<Modal>
				<ExitButton onClick={props.exitModal} />
				<h1>Konfigurator servisa</h1>
				<h3>Korak 2. Odaberite jednu ili više usluga za koje ste</h3>
				<ServicesContainer>
					{services.map(({ name, price, isChosen }, index) => {
						// debugger;
						return (
							<label for={name}>
								<input
									type="checkbox"
									id={`service-checkbox-${index}`}
									name="services"
									value={name}
									checked={isChosen}
									onChange={() => handleOnChange(index)}
								/>
								{name} {price}KN
							</label>
						);
					})}
				</ServicesContainer>

				<PriceContainer>
					<CouponContainer>
						{!showCouponField && !props.values.hasValidCoupon ? (
							// FIRST STATE
							<button
								style={{
									color: "blue",
									backgroundColor: "white",
									border: "none",
									boxShadow: "none",
									padding: "0",
									margin: "0",
									cursor: "pointer",
									textDecoration: "underline",
								}}
								onClick={() => setShowCouponField(true)}
							>
								Imam kupon
							</button>
						) : props.values.hasValidCoupon ? (
							// THIRD STATE
							<>
								<h2 style={{ color: "#08c008" }}>
									Hvala vam, unijeli ste ispravan kod kupona
								</h2>
								<h2>
									OSNOVICA: <span>{props.values.price.toFixed(2)} KN</span>
								</h2>
								<h2>
									Popust (30%):{" "}
									<span>-{(props.values.price * 0.3).toFixed(2)} KN</span>
								</h2>
							</>
						) : (
							// SECOND STATE
							<form onSubmit={handleSubmitCoupon}>
								<input
									type="text"
									id="couponCode"
									name="couponCode"
									placeholder="Unesite kod kupona ovdje"
									value={enteredCoupon}
									onChange={handleEnteredCoupon}
									style={{
										width: "180px",
										borderRadius: "1px",
										border: "2px solid black",
									}}
								/>
								<input className="input-field" type="submit" value="Primjeni" />
							</form>
						)}
					</CouponContainer>
					<TotalPriceContainer>
						UKUPNO:
						<span>
							{props.values.hasValidCoupon
								? (props.values.price * 0.7).toFixed(2)
								: props.values.price.toFixed(2)}
							KN
						</span>
					</TotalPriceContainer>
				</PriceContainer>
				<hr />
				<NavigationButtonContainer>
					<button onClick={props.previousStep}>Nazad</button>
					<button disabled={!props.values.price > 0} onClick={props.nextStep}>
						Dalje
					</button>
				</NavigationButtonContainer>
			</Modal>
		</ModalContainer>
	);
}

export default SecondStep;

const Modal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 15px 30px;
	max-width: 100%;
	border: 1px solid black;
	width: 50%;
	min-height: 35%;
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

	> hr {
		color: gray;
		width: 100%;
	}
`;

const ServicesContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	> label {
		margin-right: 20px;
		margin-bottom: 10px;
		width: 210px;

		font-size: 12px;
		font-weight: 500;
	}
`;

const PriceContainer = styled.div`
	align-self: flex-end;
	margin-top: auto;
	justify-content: end;
	> span {
		font-weight: bold;
	}

	> a {
		display: block;
	}
`;

const CouponContainer = styled.div`
	margin-top: 40px;
	> h2 {
		text-align: end;
		font-size: 11px;
		font-weight: normal;
		> span {
			font-weight: bold;
		}
	}
`;
const TotalPriceContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	> span {
		font-weight: bold;
	}
`;
