import { useState } from "react";
import { Carousel } from "react-bootstrap";
function ImageCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const carouselItemList = props.images.map((item, index) => {
    return (
      <Carousel.Item className="carousel-img-container">
        <img
          className="d-block carousel-img"
          fluid={true}
          src={"/uploads/" + item.src}
          alt={item.alt}
        />
      </Carousel.Item>
    );
  });
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItemList}
    </Carousel>
  );
}
export default ImageCarousel;
