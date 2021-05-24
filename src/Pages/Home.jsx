import Layout from "../Components/Layout/Layout";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Logo from '../Components/Logo/Logo'

const Box = styled.div`
  color: #84848d;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 100px 0 60px 0;
  margin-left: 200px;
  
  .logo-container {
    display: flex;
    padding-bottom: 50px;
    > div {
      font-size: 100px;
      height: 104px;
    }
  }

  .login-register {
    text-align: center;
    a {
      color: red;
    }
  }
  a {
    text-align: center;
    text-decoration: none;
  }
  h1 {
    margin: 0;
    color: red;
  }
  h2 {
    margin-top: auto;
  }
  .link-to-login {
    text-transform: none;
    font-size: 28px;
    color: white;
  }
  .MuiCheckbox-root {
    color: white;
  }
  .MuiButton-root {
    border-radius: 25px;
    margin-bottom: 20px;
    background-color: red;
    &:hover {
      background-color: red;
      opacity: 0.9;
    }
  }
  .MuiFormControl-root {
    margin: 10px 0;
    .MuiInputBase-root {
      border-radius: 30px;
      background-color: white;
      border: none;
    }
  }
`;

const SalvarLoginSenha = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  a {
    color: #84848d;
    padding-bottom: 2px;
    border-bottom: 1px solid red;
  }
`;

const Home = () => {
  return (
    <Layout disabledHeader={true}>
      <Box>
      <div className="logo-container">
        <Logo/>
      </div>
        <h1>Bem Vindo(a) de Volta!</h1>
        <h2>Acesse sua conta</h2>
        <TextField
          id="outlined-basic"
          placeholder="Usuário"
          variant="outlined"
        />
        <TextField id="outlined-basic" placeholder="Senha" variant="outlined" />

        <SalvarLoginSenha>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Salvar login"
          />
          <a href="#">Esqueci a senha</a>
        </SalvarLoginSenha>

        <Button variant="contained" color="primary">
          <Link className="link-to-login" to="/personagens">
            Entrar
          </Link>
        </Button>

        <div className="login-register">
          <span>Ainda não tem login?</span> <a href="#">Cadastre-se</a>
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
