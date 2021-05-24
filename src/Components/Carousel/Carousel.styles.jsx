import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1200px;
	margin: 50px auto;
	.slick-prev {
		left: -42px;
	}
	svg {
		color: red;
		width: 40px;
		height: 40px;
		&:hover {
			color: red;
			opacity: 0.8;
		}
	}
`;
