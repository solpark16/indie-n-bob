import { FC } from "react";

const Carousel: FC = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide w-[100%]"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner w-full">
        <div className="carousel-item active">
          <img
            src="/실리카겔 커버3.webp"
            className="d-block w-[100%] h-[500px] object-cover mx-auto"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/잔나비 커버.jpg"
            className="d-block w-[100%] h-[500px] object-cover mx-auto"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/루시 커버.jpg"
            className="d-block w-[100%] h-[500px] object-cover mx-auto"
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
