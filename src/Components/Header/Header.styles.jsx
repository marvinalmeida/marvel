import styled from 'styled-components';

export const Menu = styled.div`
	ul {
		display: flex;
		font-size: 20px;
		list-style: none;
		li {
			margin: 0px 50px;
		}
		a {
			text-decoration: none;
			color: white;
		}
	}
`;

export const Wrapper = styled.div`
	background-color: black;
	display: flex;
	justify-content: space-between;
	padding: 0px 80px;
	height: 80px;
	border-bottom: 3px solid red;
	align-items: center;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	span {
		margin-left: 4px;
		color: #84848d;
		font-size: 20px;
	}
`;
