import Card from "./Card.jsx";

const Cards = () => {
  const cardData = [
    {
      title: "Card 1",
      content:
        "Lorem ipsum dolor sit amet,  sapiente, tempore debitis beatae culpa natus architecto.",
    },
    {
      title: "Card 2",
      content:
        "Lorem ipsum dolor sit amet,  sapiente, tempore debitis beatae culpa natus architecto.",
    },
    {
      title: "Card 3",
      content:
        "Lorem ipsum dolor sit amet,  sapiente, tempore debitis beatae culpa natus architecto.",
    },
    {
      title: "Card 4",
      content:
        "Lorem ipsum dolor sit amet,  sapiente, tempore debitis beatae culpa natus architecto.",
    },
  ];

  return (
    <div className="row m-2 d-flex align-items-center justify-content-center flex-wrap">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-3 d-flex justify-content-center">
          <Card title={card.title} content={card.content} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
