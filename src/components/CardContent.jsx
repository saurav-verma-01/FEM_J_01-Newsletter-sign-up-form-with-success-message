import React from "react";
import ListItem from "./ListItem";

const CardContent = () => {
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <div className="card-content">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        {list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>

      <form className="newsletter-form">
        <div className="input-group">
          <label htmlFor="">Email address</label>
          <input type="email" name="" id="" placeholder="email@company.com" />
        </div>

        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default CardContent;
