import "./styles/SlidingCards.css";
import { cards } from "../../utils/constants";
import { Image, Carousel} from "react-bootstrap";

const SlidingCards = () => {
  return (
    <Carousel
      controls={true}
      indicators={false}
    >
      {cards.map((item) => {
        return (
        <Carousel.Item>
          <Carousel.Caption>
            <h3>{cards.title}</h3>
            <p>{cards.content}</p>
          </Carousel.Caption>

          <Image src={item.cardImage} className="w-100"/>
        </Carousel.Item>
        )}
      )}
    </Carousel>
  );
};

export default SlidingCards;
