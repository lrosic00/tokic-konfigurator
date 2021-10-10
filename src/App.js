import "./App.css";
import styled from "styled-components";
import Jumbotron from "./components/Jumbotron";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
import Endscreen from "./components/Endscreen";
import { useState } from "react";

function App() {
	const [state, setState] = useState({
		step: 0,
		carBrand: "",
		price: 0,
		priceWithCoupon: 0,
		hasValidCoupon: false,
		fullName: "",
		email: "",
		phoneNo: "",
		note: "",
		services: [
			{
				name: "Zamjena ulja i filtera",
				price: 500,
				isChosen: false,
			},
			{
				name: "Promjena pakni",
				price: 450,
				isChosen: false,
			},
			{
				name: "Promjena guma",
				price: 100,
				isChosen: false,
			},
			{
				name: "Servis klima uređaja",
				price: 299,
				isChosen: false,
			},
			{
				name: "Balansiranje guma",
				price: 50,
				isChosen: false,
			},
			{
				name: "Zamjena ulja u kočnicama",
				price: 229,
				isChosen: false,
			},
		],
	});

	const values = state;

	const chosenService = (index) => {
		setState({
			...state,
			services: {
				...state.services,
				[index]: {
					...state.services[index],
					isChosen: !state.services[index].isChosen,
				},
			},
		});
	};

	const exitModal = () => {
		setState({ ...state, step: 0 });
	};
	//increments step field
	const nextStep = () => {
		setState({ ...state, step: state.step + 1 });
	};

	//decrements step field
	const previousStep = () => {
		setState({ ...state, step: state.step - 1 });
	};
	const goToStep = (stepValue) => {
		setState({ ...state, step: stepValue });
	};

	const handleData = (input) => (e) => {
		setState({ ...state, [input]: e.target.value });
	};

	const setPrice = (newprice) => {
		state.price = newprice;
	};

	const renderModal = () => {
		switch (state.step) {
			case 1:
				return (
					<FirstStep
						nextStep={nextStep}
						handleData={handleData}
						exitModal={exitModal}
						values={values}
					/>
				);
			case 2:
				return (
					<SecondStep
						nextStep={nextStep}
						previousStep={previousStep}
						handleData={handleData}
						exitModal={exitModal}
						values={values}
						chosenService={chosenService}
						setPrice={setPrice}
					/>
				);
			case 3:
				return (
					<ThirdStep
						nextStep={nextStep}
						previousStep={previousStep}
						handleData={handleData}
						exitModal={exitModal}
						values={values}
					/>
				);
			case 4:
				return (
					<FourthStep
						nextStep={nextStep}
						previousStep={previousStep}
						handleData={handleData}
						exitModal={exitModal}
						values={values}
						goToStep={goToStep}
					/>
				);
			case 5:
				return <Endscreen exitModal={exitModal} />;
			default:
				return;
		}
	};

	return (
		<div className="App">
			<Jumbotron />
			<Body>
				<h3>Pritisnite gumb niže kako biste pokrenuli</h3>
				<button onClick={nextStep}>Pokreni konfigurator</button>
			</Body>
			{renderModal()}
		</div>
	);
}

export default App;

const Body = styled.div`
	padding-top: 10vh;

	> h3 {
		text-align: center;
		margin-bottom: 5vh;
	}
	> button {
		margin: auto;
		display: block;
		cursor: pointer;
	}
`;
