import styled from "styled-components"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '../Card/Card'

import Slider from "react-slick";

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 50px auto;
    .slick-prev { 
        left: -42px;
    }
    svg {
        color: red;
        width: 40px;
        height: 40px;
        &:hover {
            color: red;
            opacity: 0.8;
        }
    }
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <ArrowForwardIcon fontSize="large" />,
    prevArrow: <ArrowBackIcon fontSize="large" />
  };


const Carousel = (props)=> (
    <Wrapper>
        <Slider { ...settings }>
            { props.items.map(item => <Card item={item} />)}
        </Slider>
        
    </Wrapper>
)

export default Carousel