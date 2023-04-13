import React from "react";
import RentalList from "./RentalList";

const Rentals = () => {
  const rentals = [
    {
      title: "Texa",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-35373718/original/17e6cd4f-0708-4a8f-8b5b-bf15d01d01bb.jpeg?im_w=720",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      price: "455",
    },
    {
      title: "Texa",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-39945855/original/9c311af4-b777-4d4e-9f8e-f15333ca51f6.jpeg?im_w=720",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      price: "455",
    },
    {
      title: "Texa",
      img: "https://a0.muscache.com/im/pictures/2652074c-1e9e-4e3d-8982-75d286e30273.jpg?im_w=720",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      price: "455",
    },
    {
      title: "Texa",
      img: "https://a0.muscache.com/im/pictures/db3bfcf3-cd0c-4884-a83a-b8b6ab206935.jpg?im_w=720",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      price: "455",
    },
    {
      title: "Texa",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-555073113508353735/original/ffa03f96-e17a-4408-9a08-e88f21108f39.jpeg?im_w=720",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      price: "455",
    },
    {
      title: "Texa",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-35373718/original/2bd38847-cd76-4e83-80ca-2ac8b3db8b25.jpeg?im_w=720",
      desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
      price:"45"
    },
  ];
  return (
    <div className="py-8 mx-16">
      <div className="grid grid-1">
        {rentals.map((ele, index) => (
          <RentalList
            key={index}
            title={ele.title}
            img={ele.img}
            desc={ele.desc}
            price={ele.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
