import Carousel from "react-bootstrap/Carousel";
import "./Portfolio.css";

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="project-window"
          src="/images/projects/UHMRideshare.png"
          alt="First slide"
          style={{ filter: "blur(1px)" }}
        />
        <Carousel.Caption>
          <h3 className="project-description">First slide label</h3>
          <p className="project-description">
            Rideshare App connecting University of Hawaii Students
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="project-window"
          src="/images/projects/UHMRideshare.png"
          alt="Second slide"
          style={{ filter: "blur(1px)" }}
        />
        <Carousel.Caption>
          <h3 className="project-description ">Second slide label</h3>
          <p className="project-description">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;
