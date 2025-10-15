import Carousel from "react-bootstrap/Carousel";
import "./Portfolio.css";

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="project-window"
          src="/images/projects/livably.png"
          alt="Second slide"
          style={{ filter: "blur(0.5px)" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="project-window"
          src="/images/projects/UHMRideshare.png"
          alt="First slide"
          style={{ filter: "blur(0.5px)" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="project-window"
          src="/images/projects/Inventory.png"
          alt="First slide"
          style={{ filter: "blur(0.5px)" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;
