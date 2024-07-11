import { FC } from "react";

const Carousel: FC = () => {
  return (
    <div className="relative w-full">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-full">
          <div className="carousel-item active">
            <img
              src="/실리카겔 커버3.webp"
              className="d-block w-[1520px] h-[500px] object-cover"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/잔나비 커버.jpg"
              className="d-block w-[1520px] h-[500px] object-cover"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/루시 커버.jpg"
              className="d-block w-[1520px] h-[500px] object-cover"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
