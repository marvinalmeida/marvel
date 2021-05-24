import Layout from "../Components/Layout/Layout";
import Carousel from "../Components/Carousel/Carousel"
import charactersMock from "../mocks/characters.json"

const Personagens = () => (
  <Layout>
    <Carousel items={charactersMock}/>
  </Layout>
);
export default Personagens;
