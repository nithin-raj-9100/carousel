import { useState } from "react";
import reviews from "../data";

const Reviews = () => {
  let [number, setNumber] = useState(0);

  const { name, id, job, image, text } = reviews[number];

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h4>{job}</h4>
      <p>{text}</p>

      <button
        onClick={(e) => {
          setNumber(number - 1);
          console.log(number);

          if (number === 0) {
            console.log("neg", number);
            setNumber((e) => (e = 3));
          }
        }}
      >
        Previous button
      </button>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 3) + 1);
          console.log(number);
        }}
      >
        Random
      </button>
      <button
        onClick={() => {
          console.log(number);
          setNumber((e) => e + 1);
          if (number === 3) {
            setNumber((e) => (e = 0));
            console.log("foo");
          }
        }}
      >
        Next button
      </button>
    </div>
  );
};

export default Reviews;
