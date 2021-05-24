import { CardLite, CardDescription, CardDetails } from "./Card.styles";
import { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import StarIcon from "@material-ui/icons/Star";

const Card = (props) => {
  const [openDetails, setOpenDetails] = useState(false);

  return openDetails ? (
    <CardDetails>
      <CardLite backgroundImage={props.item.image} />
      <CardDescription>
        <span className="title">{props.item.title}</span>
        {props.item.appears_in && (
          <div className="appears_in">
            <h5>Aparições:</h5>
            <ul>
              {props.item.appears_in.map((appear_in) => (
                <li>{appear_in}</li>
              ))}
            </ul>
          </div>
        )}
        {props.item.details && <span>{props.item.details}</span>}
        {props.item.buy_in && (
          <div className="buy_in">
            <h5>Disponível para compra:</h5>
            <ul>
              {props.item.buy_in.map((store) => (
                <li><img src={`/images/${store}.png`} alt={store} /></li>
              ))}
            </ul>
          </div>
        )}

        <div className="rating">
          Avaliação dos fãs:
          <div>
            {Array.from({length: 5}, (_, i) => i + 1).map((_, i) => {
              return <StarIcon style={{ color: props.item.stars > i ? null : '#84848D' }}  />
            })}

          </div>
        </div>
        <div className="close-details">
          <HighlightOffIcon onClick={() => setOpenDetails(false)} />
        </div>
      </CardDescription>
    </CardDetails>
  ) : (
    <CardLite backgroundImage={props.item.image}>
      <div className="content">
        <span className="title">{props.item.title}</span>
        <span className="description">{props.item.description}</span>
        <span onClick={() => setOpenDetails(true)} className="btn-details">
          ver detalhes
        </span>
      </div>
    </CardLite>
  );
};
export default Card;
