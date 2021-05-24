import Layout from '../Components/Layout/Layout';
import Carousel from '../Components/Carousel/Carousel';
import { useSelector } from 'react-redux';

const Personagens = () => {
	const characters = useSelector((store) => store.characters);
	return (
		<Layout>
			<Carousel items={characters} />
		</Layout>
	);
};

export default Personagens;
