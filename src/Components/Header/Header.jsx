import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { Wrapper, Menu, UserInfo } from './Header.styles';

const Header = () => (
	<Wrapper>
		<Link to="/">
			<Logo>MARVEL</Logo>
		</Link>
		<Menu>
			<ul>
				<li>
					<Link to="/personagens">Personagens</Link>
				</li>
				<li>
					<Link to="/filmes">Filmes</Link>
				</li>
				<li>
					<Link to="/Hqs">Hqs</Link>
				</li>
			</ul>
		</Menu>
		<UserInfo>
			<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
			<span>Sair</span>
		</UserInfo>
	</Wrapper>
);
export default Header;
