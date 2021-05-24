import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo'

const Menu = styled.div`
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

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;
  height: 80px;
  border-bottom: 3px solid red;
  align-items: center;
`;


const UserInfo = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 4px;
    color: #84848d;
    font-size: 20px;
  }
`;

const Header = () => {
  return (
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
};
export default Header;
