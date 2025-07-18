const Card = ({ title, content }) => {
  return (
    <div className="card ">
      <div
        className="card-img-top bg-light d-flex align-items-center justify-content-center"
        style={{ height: "300px" }}
      >
        <span className="text-muted">500 x 325</span>
      </div>
      <div className=" text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>

        <div className="card-header     align-content-center">
          <a href="#" className="btn btn-primary align-self-center">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
