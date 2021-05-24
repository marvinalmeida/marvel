import Header from '../Header/Header';
import { Wrapper, Shadow } from './Layout.styles';

const Layout = (props) => {
	return (
		<Wrapper>
			<Shadow>
				{!props.disabledHeader && <Header />}
				{props.children}
			</Shadow>
		</Wrapper>
	);
};

export default Layout;
