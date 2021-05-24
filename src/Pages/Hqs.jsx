import Layout from "../Components/Layout/Layout";
import Carousel from "../Components/Carousel/Carousel"
import hqsMock from "../mocks/hqs.json"

const Hqs = () => (
  <Layout>
    <Carousel items={hqsMock}/>
  </Layout>
);
export default Hqs;
