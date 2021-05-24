import Layout from "../Components/Layout/Layout";
import Carousel from "../Components/Carousel/Carousel"
import moviesMock from '../mocks/movies.json'

function Filmes() {
  return (
    <Layout>
      <Carousel items={moviesMock}/>
    </Layout>
  );
}

export default Filmes;
