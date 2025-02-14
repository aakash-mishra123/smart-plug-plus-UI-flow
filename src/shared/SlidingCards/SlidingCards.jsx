
import { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'; 
import './styles/SlidingCards.css';
import { cards } from '../../utils/constants';

const SlidingCards = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % cards.length);
    };
  
    const prevSlide = () => {
      setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };
  
    return (
      <div className="slider-container">
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(-${ index * 15}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card ${card.color}`}
                
              >
                <h1>card title</h1>
                {card.title}
              </div>
            ))}
          </div>
        </div>
          <button onClick={prevSlide} className="button left_click">
            <BiChevronLeft size={24} />
          </button>

          <button onClick={nextSlide} className="button right_click">
            <BiChevronRight size={24} />
          </button>
      </div>
    )
};

export default SlidingCards;