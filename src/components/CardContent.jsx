import { useState } from "react";
import ListItem from "./ListItem";

const CardContent = ({ setIsValid, email, setEmail }) => {
  const [message, setMessage] = useState("");
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Regulat Expression to check Email Validity
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      // If email is not valid, Show the custom message
      setMessage("valid email required");
      setIsValid(false);
      return;
    }

    // If email is valid, clear the input and show success message
    // setEmail(e.target.value);
    setMessage("");
    setIsValid(true);
  };
  return (
    <div className="card-content">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        {list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>

      <form className="newsletter-form" onSubmit={handleFormSubmit} noValidate>
        <div className="input-group">
          <div>
            <label htmlFor="">Email address</label>
            {message && <p className="message">{message}</p>}
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id=""
            placeholder="email@company.com"
          />
        </div>

        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default CardContent;
