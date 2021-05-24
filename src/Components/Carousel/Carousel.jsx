import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '../Card/Card';
import { Wrapper } from './Carousel.styles';
import Slider from 'react-slick';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	nextArrow: <ArrowForwardIcon fontSize="large" />,
	prevArrow: <ArrowBackIcon fontSize="large" />,
};

const Carousel = (props) => (
	<Wrapper>
		<Slider {...settings}>
			{props.items.map((item) => (
				<Card item={item} />
			))}
		</Slider>
	</Wrapper>
);

export default Carousel;
