import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: require('../Assets/Img/pokemon-x.jpg'),
    altText: 'Image1',
    // caption: 'Pokemon-X'
  },
  {
    src: require('../Assets/Img/pokemon-y.jpg'),
    altText: 'Image2',
    // caption: 'Pokemon-Y'
  },
  {
    src: require('../Assets/Img/pokemon-esmeralda-delta-.jpg'),
    altText: 'Image3',
    // caption: 'Pokemon-Esmeralda-Delta'
  },
  {
    src: require('../Assets/Img/pokemon-zafiro-alfa.jpg'),
    altText: 'Image4',
    // caption: 'Pokemon-Zafiro-Alfa'
  },
  {
    src: require('../Assets/Img/pokemon-luna.jpg'),
    altText: 'Image7',
    // caption: 'Pokemon-Luna'
  },
  {
    src: require('../Assets/Img/pokemon-omega-ruby.webp'),
    altText: 'Image8',
    // caption: 'Pokemon-Omega-Ruby'
  },
  {
    src: require('../Assets/Img/pokemon-sol.webp'),
    altText: 'Image9',
    // caption: 'Pokemon-Sol'
  }
];

class PokeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="750px" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default PokeCarousel;