import listImg from "../assets/icon-list.svg";
const SuccessCard = ({ email, setEmail, setIsValid }) => {
  const handleDismiss = () => {
    setEmail("");
    setIsValid(false);
  };
  return (
    <section className="success-card">
      <img src={listImg} alt="list icon" className="valid-icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="success-email">{email}</span> Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button onClick={handleDismiss}>Dismiss message</button>
    </section>
  );
};

export default SuccessCard;
