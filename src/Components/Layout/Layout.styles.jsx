import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: black;
	background-image: url('/images/marvel.png');
	background-repeat: no-repeat;
	background-position-x: right;
	background-position-y: top;
	@font-face {
		font-family: 'Axiforma';
		src: local('Axiforma'), url(./fonts/AxiForma-regular.ttf) format('opentype');
	}
	@font-face {
		font-family: 'Axiforma';
		font-weight: 100;
		src: local('Axiforma'), url(./fonts/AxiForma-light.ttf) format('opentype');
	}
	@font-face {
		font-family: 'Axiforma';
		font-weight: bold;
		src: local('Axiforma'), url(./fonts/AxiForma-bold.ttf) format('opentype');
	}
	font-family: 'Axiforma', sans-serif;
`;

export const Shadow = styled.div`
	background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	min-height: 100vh;
`;
