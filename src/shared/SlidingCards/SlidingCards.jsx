import "./styles/SlidingCards.css";
import { cards } from "../../utils/constants";
import { Image, Carousel} from "react-bootstrap";

const SlidingCards = () => {
  return (
    <Carousel
    >
      {cards.map((item) => {
        return (
        <Carousel.Item>
          <Carousel.Caption>
            <h3>{cards.title}</h3>
            <p>{cards.content}</p>
          </Carousel.Caption>

          <Image src={item.cardImage} />
        </Carousel.Item>)
      }
      )}
    </Carousel>
  );
};

export default SlidingCards;
