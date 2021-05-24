import Layout from '../Components/Layout/Layout';
import Carousel from '../Components/Carousel/Carousel';
import { useSelector } from 'react-redux';

function Filmes() {
	const movies = useSelector((store) => store.movies);

	return (
		<Layout>
			<Carousel items={movies} />
		</Layout>
	);
}

export default Filmes;
