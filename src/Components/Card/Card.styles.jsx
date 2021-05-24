import styled from 'styled-components';

export const CardLite = styled.div`
	height: 439px;
	width: 289px;
	min-width: 289px;
	background-image: url(/images/${(props) => props.backgroundImage});
	background-repeat: no-repeat;
	color: white;
	display: flex;
	align-items: flex-end;
	border-radius: 30px;
	.content {
		height: 234px;
		background-image: linear-gradient(rgba(255, 0, 0, 1), rgba(255, 0, 0, 0));
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		text-align: center;
		border-radius: 30px;
	}
	.title {
		font-size: 20px;
		font-weight: bold;
	}
	.description {
		font-size: 12px;
	}
	.btn-details {
		font-size: 20px;
		cursor: pointer;
	}
`;

export const CardDetails = styled.div`
	width: 659px;
	height: 439px;
	color: white;
	display: flex;
	background-image: linear-gradient(to right, rgba(255, 0, 0, 1), #5d0000);
	position: absolute;
	z-index: 5;
	h5 {
		margin: 0;
		font-size: 18px;
		font-weight: bold;
	}
	.buy_in {
		ul {
			display: flex;
			li {
				img {
					max-width: 40px;
				}
			}
		}
	}
	.rating {
		font-size: 26px;
		svg {
			color: #ffb300;
			&:hover {
				color: #ffb300;
			}
		}
	}
	.title {
		font-size: 30px;
	}
	.appears_in {
		font-size: 12px;
		display: block;
	}

	.description {
		width: 276px;
		height: 151px;
		font-size: 18px;
		h5 {
			margin: 0;
			font-size: 18px;
		}
	}
	.close-details {
		display: flex;
		justify-content: flex-end;
		cursor: pointer;
	}

	border-radius: 30px;
`;

export const CardDescription = styled.div`
	padding-left: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
