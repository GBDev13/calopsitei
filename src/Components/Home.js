import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Feed Inicial" description="Home da rede social Calopsitei" />
      <Feed />
    </section>
  );
};

export default Home;
