import { Carousel } from 'react-bootstrap'
import './carousel.css'

export function CarouselComponent() {
  const slides = [
    {
      id: 1,
      image: 'src/assets/IMG_2730.jpeg',
      title: 'Fresh Local Produce',
      description: 'Supporting local farmers and sustainable agriculture'
    },
    {
      id: 2,
      image: 'src/assets/IMG_2920.jpeg',
      title: 'Artisanal Goods',
      description: 'Handcrafted products from community makers'
    },
    {
      id: 3,
      image: 'src/assets/IMG_3111.jpeg',
      title: 'Building Community',
      description: 'Together we grow stronger'
    }
  ]

  return (
    <Carousel className="carousel-container" interval={15000} >
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="carousel-image"
            src={slide.image}
            alt={slide.title}
          />
          {/* <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
