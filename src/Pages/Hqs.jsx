import Layout from "../Components/Layout/Layout";
import Carousel from "../Components/Carousel/Carousel"
import { useSelector } from "react-redux"

const Hqs = () => {

  const hqs = useSelector(store => store.hqs)

  return (
    <Layout>
      <Carousel items={hqs}/>
    </Layout>
  );
}
export default Hqs;
