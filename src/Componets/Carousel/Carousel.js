import React from "react";

function Carousel() {
  const content = [
    {
      image:
        "https://image.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg",
      title: "Casual sports shoes",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse eius dolore aliquid soluta ipsa.",
      condition: "active",
      interval: 10000,
    },
    {
      image:
        "https://image.freepik.com/free-vector/colorstay-make-up-elegant-packaging-background-drop-foundation_1441-286.jpg",
      title: "Tender Light",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse eius dolore aliquid soluta ipsa.",
      interval: 20000,
    },
    {
      image:
        "https://image.freepik.com/free-vector/pink-background-with-moisturizing-cosmetic-day-night-premium-products_1441-281.jpg",
      title: "Lorum Ipsam",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse eius dolore aliquid soluta ipsa.",
    },
  ];

  return (
    <div className="container">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {content.map((content) => (
            <CarouselItem content={content} key={content.title} />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
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
          data-bs-target="#carouselExampleDark"
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
}

const CarouselItem = (props) => {
  console.log(props);
  const { body, condition, image, interval, title } = props.content;
  return (
    <div
      className={condition ? "carousel-item " + condition : "carousel-item"}
      interval={interval ? Number(interval) : ""}
    >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center ">
            <div className="card-body text-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <button className="btn btn-info">Visit store</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={image} alt="..." className="h-75" />
            <small className="text-center">
              <a href="https://www.freepik.com/vectors/background" className="">
                <p className="text-center">
                  Background vector created by BiZkettE1 - www.freepik.com
                </p>
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
