import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import { useNavigate } from "react-router-dom";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  };

  return (
    <section className="animeLeft">
      <Head
        title="Esqueceu a senha"
        description="Home da rede social Calopsitei"
      />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
          <button className="link" onClick={() => navigate("/carsadminlogin")}>
            Voltar
          </button>
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
