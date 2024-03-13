import listImg from "../assets/icon-list.svg";

const ValidContent = () => {
  return (
    <div className="valid-content">
      <img src={listImg} alt="list icon" className="valid-icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </div>
  );
};

export default ValidContent;
